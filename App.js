import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import futureMiddleware from 'redux-future'

import Main from './Main'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(futureMiddleware))

export default () =>
  <Provider store={store}>
    <Main/>
  </Provider>
