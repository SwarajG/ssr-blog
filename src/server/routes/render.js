import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { blogs, currentBlog } from '../../shared/reducers'
import serialize from 'serialize-javascript';
import App from '../../shared/App';
import { matchPath, StaticRouter } from 'react-router-dom';
// import { StoreContext } from '../../shared/context';
import routes from '../../shared/routes';

function renderView(response) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Blog</title>
      <script src="/bundle.js" defer></script>
      <script>
        window.__PRELOADED_STATE__ = ${serialize(response.data)}
      </script>
    </head>
    <body>
      <div id="root">${response.markUp}</div>
    </body>
    </html>
  `;
}

export default function renderRoutes(app) {
  app.get('*', (req, res, next) => {
    if (req.url.includes('api')) {
      next();
    }

    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoute ?
      (activeRoute.fetchInitData && activeRoute.fetchInitData(req.url)) || Promise.resolve() :
      Promise.resolve();
    promise
      .then((data) => {
        const blogApp = combineReducers({
          blogs,
          currentBlog
        });
        const store = createStore(blogApp);
        const context = { data, store };
        const markUp = renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              {/* <StoreContext.Provider value={store}> */}
                <App store={store} />
              {/* </StoreContext.Provider> */}
            </StaticRouter>
          </Provider>
        );
        const response = { store, markUp, data };
        res.send(renderView(response));
      })
      .catch(next)
  });
};