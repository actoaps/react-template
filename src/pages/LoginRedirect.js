import React from 'react'
import { Redirect } from 'react-router-dom'
import { saveJwtTokenToStorage } from '../util/auth'

export default function LoginRedirect () {
    const hasJwt = location.hash.includes('#')
    const jwtString = location.hash.replace('#', '')

    if (hasJwt) {
        saveJwtTokenToStorage(jwtString)
    }

    function getRedirect () {
        if (hasJwt) {
            return <Redirect to='/' />
        } else {
            return <Redirect to='/loginerror' />
        }
    }

    return getRedirect()
}
