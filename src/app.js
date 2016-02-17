import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import YearsList from './components/YearsList'
import Year from './components/Year'
// import './css/base.css'

const root = document.getElementById('root')

render((
  <Router history={browserHistory}>
    <Route path="/" component={YearsList} />
    <Route path="year/:year" component={Year} />
  </Router>
), root)
