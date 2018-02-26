import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'
import 'semantic-ui-css/semantic.min.css';
import './index.css'
const target = document.querySelector('#root')
const backColor = {color:'white', padding:0, margin:0}


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div   style={backColor}>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
