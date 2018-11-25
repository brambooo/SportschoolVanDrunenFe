/*
 *
 * UserWeightContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USER_WEIGHTS_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  userWeights: [],
});

function userWeightContainerReducer(state = initialState, action) {
  console.log('### userWeightContainerReducer CALLED', action.type);
  switch (action.type) {
    case GET_USER_WEIGHTS_SUCCEEDED:
      console.log('data', action);
      return state.set('userWeights', action.userWeights);
    default:
      return state;
  }
}

export default userWeightContainerReducer;
