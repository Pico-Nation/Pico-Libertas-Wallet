import * as types from '../types';

import { getAccount } from '../accounts';
import pico from '../helpers/pico';
import { payforcpunet } from '../helpers/pico';

export function unregproxy() {
  return (dispatch: () => void, getState) => {
    const {
      connection,
      settings
    } = getState();
    const { account } = settings;

    dispatch({
      type: types.SYSTEM_UNREGPROXY_PENDING
    });

    let actions = [
      {
        account: 'picoio',
        name: 'regproxy',
        authorization: [{
          actor: account,
          permission: settings.authorization || 'active'
        }],
        data: {
          proxy: account,
          isproxy: 0
        }
      }
    ];

    const payforaction = payforcpunet(account, getState());
    if (payforaction) actions = payforaction.concat(actions);

    return pico(connection, true, payforaction!==null).transaction({
      actions
    }).then((tx) => {
      // Refresh the account
      setTimeout(dispatch(getAccount(account)), 500);
      return dispatch({
        payload: { tx },
        type: types.SYSTEM_UNREGPROXY_SUCCESS
      });
    }).catch((err) => dispatch({
      payload: { err },
      type: types.SYSTEM_UNREGPROXY_FAILURE
    }));
  };
}

export default {
  unregproxy
};
