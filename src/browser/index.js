import React from 'react';
import App from '../shared/App';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { blogs, currentBlog } from '../shared/reducers';
// import { StoreContext } from '../shared/context';

const blogApp = combineReducers({
  blogs,
  currentBlog
});

const store = createStore(blogApp);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* <StoreContext.Provider value={store}> */}
        <App store={store} />
      {/* </StoreContext.Provider> */}
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);
