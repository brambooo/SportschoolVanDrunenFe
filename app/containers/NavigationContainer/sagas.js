// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

// Voordeel van generator functies is het kunnen uitvoeren van async logica zonder callbacks!

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer); // call side effect - roept deze methode aan met deze parameters...
    yield put(requestTopicsSucceeded(topics)); // put side effect - maakt het mogelijk acties uit te voeren zodat de data via redux wordt opgeslagen.
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Deze functie wordt afgevuurd nadat de fetchTopics actie wordt aangeroepen en voert de generator functie (fetchTopics aan).
// Voordeel kunnen uitvoeren van async functies met side effects!!!

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
