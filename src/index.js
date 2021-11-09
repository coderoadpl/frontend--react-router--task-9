import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'

import UserContextProvider from './contexts/UserContext'

import App from './App'

import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
