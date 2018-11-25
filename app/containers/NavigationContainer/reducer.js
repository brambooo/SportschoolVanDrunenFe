/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  topics: [],
});

/**
 * navigationContainerReducer
 * Via een reducer zorgen we ervoor dat de nieuwe state wordt opgeslagen. 
 */
function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    default:
      return state;
  }
}

export default navigationContainerReducer;
