import React from 'react'
import { hot } from 'react-hot-loader/root'
import { setResponseHandling } from '@acto/ajax'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import requireAuth from './components/hoc/requireAuth'
import Login from './pages/Login/Login'
import LoginRedirect from './pages/LoginRedirect'
import LoginError from './pages/LoginError'
import Home from './pages/Home'

function App () {
    const history = useHistory()
    setResponseHandling(res => res.unauthorized(() => history.push('/login')))

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/loginredirect' component={LoginRedirect} />
            <Route exact path='/loginerror' component={LoginError} />

            <Route exact path='/' component={requireAuth(Home)} />
        </Switch>
    )
}

function GlobalProviders ({ children }) {
    return (
        <React.StrictMode>
            <Router>
                { children }
            </Router>
        </React.StrictMode>
    )
}

export default hot(<GlobalProviders><App /></GlobalProviders>)
