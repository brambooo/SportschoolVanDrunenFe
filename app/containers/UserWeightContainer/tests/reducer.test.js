import expect from 'expect';
import userWeightContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userWeightContainerReducer', () => {
  it('returns the initial state', () => {
    expect(userWeightContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
