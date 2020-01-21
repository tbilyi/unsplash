import React from 'react';
import { Text } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PhotosNavigator from './navigation/PhotosNavigator';
import photosReducer from './store/photos-reducer';

const rootReducer = combineReducers({
  photos: photosReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PhotosNavigator />
    </Provider>
  );
}

export default App;
