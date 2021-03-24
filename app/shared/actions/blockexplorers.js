import sortBy from 'lodash/sortBy';

import * as types from './types';
import pico from './helpers/pico';

export function getBlockExplorers() {
  return (dispatch: () => void, getState) => {
    dispatch({
      type: types.SYSTEM_BLOCKEXPLORERS_PENDING
    });
    const rows = [
      {
        name: 'bloks.io',
        tokenSymbol: 'PICO',
        patterns: {
          account: 'https://www.bloks.io/account/{account}',
          txid: 'https://www.bloks.io/transaction/{txid}',
          tokenSymbol: 'PICO'
        }
      },{
        name: 'telos.bloks.io',
        tokenSymbol: 'PICO',
        patterns: {
          account: 'https://telos.bloks.io/account/{account}',
          txid: 'https://telos.bloks.io/transaction/{txid}',
          tokenSymbol: 'PICO'
        }
      },
      {
        name: 'wax.bloks.io',
        tokenSymbol: 'WAX',
        patterns: {
          account: 'https://wax.bloks.io/account/{account}',
          txid: 'https://wax.bloks.io/transaction/{txid}',
          tokenSymbol: 'WAX'
        }
      },{
        name: 'telos.picox.io',
        patterns: {
          account: 'https://telos.picox.io/account/{account}',
          txid: 'https://telos.picox.io/tx/{txid}',
          tokenSymbol: 'PICO'
        }
      },
      {
        name: 'telostracker.io',
        patterns: {
          account: 'https://telostracker.io/account/{account}',
          txid: 'https://telostracker.io/trx/{txid}',
          tokenSymbol: 'PICO'
        }
      },{
        name: 'picopark.com',
        patterns: {
          account: 'https://picopark.com/MainNet/account/{account}',
          txid: 'https://picopark.com/MainNet/tx/{txid}',
          tokenSymbol: 'PICO'
        }
      }
    ];

    const sortedList = sortBy(rows, 'name');

    const blockExplorers = {};

    sortedList.forEach((bE) => {
      blockExplorers[bE.name] = bE.patterns;
    });

    return dispatch({
      type: types.SYSTEM_BLOCKEXPLORERS_SUCCESS,
      payload: {
        blockExplorers
      }
    });
  };
}

export default {
  getBlockExplorers
};
