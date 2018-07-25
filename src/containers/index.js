import React, {Component} from 'react'

import '../assets/styles/css/bese.css'

import {RouteWithSubRoutes} from '../router'

class App extends Component {
  render() {
    return (
      <div className="router-view">
        {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default App
