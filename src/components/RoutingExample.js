import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import routes from '../routes'

export default class RoutingExample extends Component {
    render() {
        const RouteWithSubRoutes = route => {
            return <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} /> // props are Route props (match etc..)
        }
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        {routes.map((x, i) => x.path && <li key={i}><Link to={x.path}>{x.label}</Link></li>)}
                    </ul>
                    <Switch>
                        {routes.map((x, i) => (<RouteWithSubRoutes key={i} {...x} />))}
                        {/* Here, {...x} return each key-value pairs extracted from x */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

