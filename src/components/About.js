import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export default class About extends Component {
    state = {
        routes: this.props.routes
    }
    render() {
        return (
            <div>
                <h1>ABOUT</h1>
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
