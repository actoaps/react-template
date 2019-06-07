import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import requireAuth from './components/hoc/requireAuth'
import Login from './pages/Login/Login'
import LoginRedirect from './pages/LoginRedirect'
import LoginError from './pages/LoginError'
import Home from './pages/Home'

const App = () => (
    <Router>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/loginredirect' component={LoginRedirect} />
            <Route exact path='/loginerror' component={LoginError} />

            <Route exact path='/' component={requireAuth(Home)} />
        </Switch>
    </Router>
)

export default hot(App)
