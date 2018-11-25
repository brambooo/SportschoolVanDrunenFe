import { createSelector } from 'reselect';

/**
 * Direct selector to the userWeightContainer state domain
 */
const selectUserWeightContainerDomain = () => state => state.get('userWeightContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserWeightContainer
 */

const selectUserWeightContainer = () => createSelector(
  selectUserWeightContainerDomain(),
  (substate) => substate.toJS()
);

export default selectUserWeightContainer;
export {
  selectUserWeightContainerDomain,
};
