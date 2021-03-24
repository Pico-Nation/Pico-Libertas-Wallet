import * as types from '../types';

import { getAccount } from '../accounts';
import pico from '../helpers/pico';
import { payforcpunet } from '../helpers/pico';

export function sellram(amount) {
  return (dispatch: () => void, getState) => {
    const {
      connection,
      settings
    } = getState();

    dispatch({
      type: types.SYSTEM_SELLRAM_PENDING
    });

    const { account } = settings;

    let actions = [
      {
        account: 'picoio',
        name: 'sellram',
        authorization: [{
          actor: account,
          permission: settings.authorization || 'active'
        }],
        data: {
          account:account,
          bytes: Number(amount)
        }
      }
    ];

    const payforaction = payforcpunet(account, getState());
    if (payforaction) actions = payforaction.concat(actions);

    console.log('sell ram actions:', actions)

    return pico(connection, true, payforaction!==null).transaction({
      actions
    }).then((tx) => {
      setTimeout(dispatch(getAccount(account)), 500);

      return dispatch({
        payload: { tx },
        type: types.SYSTEM_SELLRAM_SUCCESS
      });
    }).catch((err) => dispatch({
      payload: { err },
      type: types.SYSTEM_SELLRAM_FAILURE
    }));
  };
}

export default {
  sellram
};
