import { combineReducers } from 'redux'
import { reducer as counterReducer } from './features/counter';
import { reducer as photoViewerReducer } from './features/photoViewer';
///import photoViewerReducer from './features/photoViewer/slice';

export const rootReducer = combineReducers({
    counter: counterReducer,
    photoViewer: photoViewerReducer,
});
