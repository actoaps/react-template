import { setResponseHandling } from '@acto/ajax'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import requireAuth from './components/hoc/requireAuth'
import Login from './pages/Login/Login'
import LoginRedirect from './pages/LoginRedirect'
import LoginError from './pages/LoginError'
import Home from './pages/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

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

// eslint-disable-next-line react/prop-types
function GlobalProviders ({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Router>
                { children }
            </Router>
            <ReactQueryDevtools position='bottom-right' />
        </QueryClientProvider>
    )
}

// eslint-disable-next-line react/display-name
export default () => <GlobalProviders><App /></GlobalProviders>
