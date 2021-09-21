import { Redirect, useHistory } from 'react-router-dom'
import { getJwtTokenFromStorage } from '../../util/auth'

// eslint-disable-next-line react/display-name
export default WrappedComponent => props => {
    const jwt = getJwtTokenFromStorage()
    const history = useHistory()

    if (!jwt) {
        sessionStorage.setItem('loginRedirectPath', history.location.pathname)
        return <Redirect to='/login'/>
    }

    return <WrappedComponent
        jwt={jwt}
        {...props}
    />
}
