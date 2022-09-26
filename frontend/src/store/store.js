import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import CrudEpics from './crud/epics';
import CrudReducer from './crud/reducers';

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

const epics = combineEpics(CrudEpics);

const configureStore = () => {
  let store;
  if (process.env.NODE_ENV === 'development') {
    store = createStore(
      combineReducers({
        crud: CrudReducer,
      }),
      composeWithDevTools(
        applyMiddleware(
          epicMiddleware,
          logger // redux logging to the console.
        )
      )
    );
  } else {
    store = createStore(
      combineReducers({
        crud: CrudReducer,
      }),
      composeWithDevTools(applyMiddleware(epicMiddleware))
    );
  }

  epicMiddleware.run(epics);

  return store;
};

export default configureStore;
