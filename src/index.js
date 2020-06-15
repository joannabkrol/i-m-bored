import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

//redux:
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import authReducer from './store/reducers/auth';
import challengeReducer from './store/reducers/addChallenge';
import fetchChallengeReducer from './store/reducers/fetchChallenge';
import finishedChallengeReducer from './store/reducers/addFinishedChallenge';
import randomChallenge from './store/reducers/generateRandomChallenge';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  challenge: challengeReducer,
  fetchChallenge: fetchChallengeReducer,
  finishedChallenge: finishedChallengeReducer,
  randomChallenge: randomChallenge,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
  <BrowserRouter><App/></BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
