import { GET_USER_WEIGHTS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getUserWeightsSucceeded, getUserWeightsFailed } from './actions';

export function fetchUserWeightsFromServer(userId) {
  return fetch(`http://localhost:3000/api/users${userId}/weights`)
    .then(response => {
      const result = response.json();
      console.log(result);
    });
}

export function fetchUserWeightsFromServerMock(userId) {
  console.log('fetchUserWeightsFromServerMock', userId);
  return mockData;
}

const registerDate = new Date();

const mockData = [
  {
    weight: 80.5,
    registered: registerDate,
  },
  {
    weight: 81.5,
    registered: registerDate,
  },
  {
    weight: 82.0,
    registered: registerDate,
  },
];

// Voordeel van generator functies is het kunnen uitvoeren van async logica zonder callbacks!

function* fetchUserWeights(action) {
  try {
    // Get userId param from takeLatest call
    const userId = action.payload;
    const userWeights = yield call(fetchUserWeightsFromServerMock, userId);
    yield put(getUserWeightsSucceeded(userWeights));
  } catch (e) {
    console.error('fetchUserWeights error');
    yield put(getUserWeightsFailed(e.message));
  }
}

// Deze functie wordt afgevuurd nadat de fetchUserWeights actie wordt aangeroepen en voert de generator functie (fetchUserWeights aan).
// Voordeel kunnen uitvoeren van async functies met side effects!!!

// Individual exports for testing
export function* fetchUserWeightsSaga() {
  yield* takeLatest(GET_USER_WEIGHTS, fetchUserWeights);
}

// All sagas to be loaded
export default [
  fetchUserWeightsSaga,
];
