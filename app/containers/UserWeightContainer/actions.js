/*
 *
 * UserWeightContainer actions
 *
 */

import {
  GET_USER_WEIGHTS,
  GET_USER_WEIGHTS_SUCCEEDED,
  GET_USER_WEIGHTS_FAILED,
} from './constants';

export function getUserWeights(userId) {
  console.log('ACTION getUserWeights', userId);
  return {
    type: GET_USER_WEIGHTS,
    payload: userId,
  };
}

export function getUserWeightsSucceeded(userWeights) {
  return {
    type: GET_USER_WEIGHTS_SUCCEEDED,
    userWeights,
  };
}

export function getUserWeightsFailed(message) {
  return {
    type: GET_USER_WEIGHTS_FAILED,
    message,
  };
}
