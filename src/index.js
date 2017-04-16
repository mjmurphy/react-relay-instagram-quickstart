import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'
import './index.css'

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/whipdart-antelope-513', {
    headers: {
      'x-graphcool-source': 'example:react-relay-instagram',
    },
  })
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route path='/' component={ListPage} queries={ViewerQueries} />
    <Route path='/create' component={CreatePage} queries={ViewerQueries} />
  </Router>
  , document.getElementById('root')
)
