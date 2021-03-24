import { Decimal } from 'decimal.js';

import * as types from './types';
import * as AccountActions from './accounts';
import pico from './helpers/pico';
import { payforcpunet } from './helpers/pico';

import { delegatebwParams } from './system/delegatebw';
const picoiocontract = 'picoio';

export function createAccount(
  accountName,
  activeKey,
  delegatedBw,
  delegatedCpu,
  ownerKey,
  ramAmount,
  transferTokens
) {
  return (dispatch: () => void, getState) => {
    const {
      connection,
      settings
    } = getState();

    const currentAccount = settings.account;

    dispatch({ type: types.SYSTEM_CREATEACCOUNT_PENDING });

    let actions = [
      {
        account: picoiocontract,
        name: 'newaccount',
        authorization: [{
            actor: currentAccount,
            permission: settings.authorization || 'active'
          }],
        data: {
          creator: currentAccount,
          name: accountName,
          owner: ownerKey,
          active: activeKey
        }
      },{
        account: picoiocontract,
        name: 'buyrambytes',
        authorization: [{
            actor: currentAccount,
            permission: settings.authorization || 'active'
          }],
        data: {
          payer: currentAccount,
          receiver: accountName,
          bytes: Number(ramAmount)
        }
      },{
        account: picoiocontract,
        name: 'delegatebw',
        authorization: [{
            actor: currentAccount,
            permission: settings.authorization || 'active'
          }],
        data: delegatebwParams(
          currentAccount,
          accountName,
          delegatedBw.split(' ')[0],
          delegatedCpu.split(' ')[0],
          transferTokens,
          settings
        )
      }
    ];

    const payforaction = payforcpunet(currentAccount, getState());
    if (payforaction) actions = payforaction.concat(actions);

    return pico(connection, true, payforaction!==null).transaction({
      actions: actions
    }, {
      broadcast: connection.broadcast,
      expireInSeconds: connection.expireInSeconds,
      sign: connection.sign
    }).then((tx) => {
      setTimeout(() => {
        dispatch(AccountActions.getAccount(currentAccount));
      }, 500);
      return dispatch({
        payload: { tx },
        type: types.SYSTEM_CREATEACCOUNT_SUCCESS
      });
    }).catch((err) => {
      dispatch({
        payload: { err },
        type: types.SYSTEM_CREATEACCOUNT_FAILURE
      });
    });
  };
}

export function createFreeAccount(account_name, owner_key, active_key, macaddresses, referredby) {
  return (dispatch: () => void, getState) => {
    dispatch({
      type: types.SYSTEM_CREATEACCOUNT_PENDING
    });
    return fetch('https://api.pico.miami:1460', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams({
        account_name: account_name,
        owner_key: owner_key,
        active_key: active_key,
        identifiers: macaddresses,
        referredby: referredby
      })
    }).then(response => response.json()).then((response) => {
      if (response.code == 1) {
        return dispatch({
          payload: { response },
          type: types.SYSTEM_CREATEACCOUNT_SUCCESS
        });
      } else if (response.code == 0) {
        const message = response && response.message && response.message.error 
          && response.message.error.details[0] ? response.message.error.details[0] : 
          response && response.message ? response.message : 'An undefined exception occurred';
        return dispatch({
          payload: { err: message },
          type: types.SYSTEM_CREATEACCOUNT_FAILURE
        });
      }
    }).catch((err) => dispatch({
      payload: { err },
      type: types.SYSTEM_CREATEACCOUNT_FAILURE
    }));    
  };
}

export default {
  createAccount,
  createFreeAccount
};
