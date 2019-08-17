import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default class Two extends Component {
    state = {
        routes: this.props.routes
    }
    render() {

        return (
            <div>
                <h3>Two</h3>
                <ul>
                    {this.state.routes.map((x, i) => (
                        <li key={i}><Link to={x.path}>{x.label}</Link></li>
                    ))}
                </ul>
                {this.state.routes.map((x, i) => (
                    <Route key={i} path={x.path} render={props => (
                        <x.component {...props} routes={x.routes} />
                    )} />
                ))}
            </div>
        )
    }
}
