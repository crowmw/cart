import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import './index.css'
import App from './containers/app/app'
import registerServiceWorker from './registerServiceWorker'
//import { push } from 'react-router-redux
//dispatch(push(/home))
const reduxRouterMiddleware = routerMiddleware(createBrowserHistory())
const middlewares = [thunk, reduxRouterMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
