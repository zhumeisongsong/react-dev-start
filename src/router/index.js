import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from "../containers";
import home from "../containers/home/home";

const host = ''

const routes = [
  {
    path: host,
    component: App,
    routes: [
      {
        path: host,
        exact: true,
        component: home
      }
    ]
  }
]

export const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes}/>
    )}
  />
)
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
