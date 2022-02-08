import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default (preloadedState) => {
    const middlewareEnhancer = applyMiddleware(sagaMiddleware);
    const composedEnhancers = compose(middlewareEnhancer);
    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    sagaMiddleware.run(rootSaga);

    return store;
};