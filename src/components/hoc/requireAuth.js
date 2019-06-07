import React from 'react'
import { Redirect } from 'react-router-dom'
import { getJwtTokenFromStorage } from '../../util/auth'

export default WrappedComponent => props => {
    const jwt = getJwtTokenFromStorage()

    if (!jwt) {
        return <Redirect to={{
            pathname: '/login',
            state: props.location.pathname
        }}
        />
    }
    return <WrappedComponent
        jwt={jwt}
        {...props}
    />
}
