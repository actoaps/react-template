/**
 * Saves jwtToken to SessionStorage
 * @param authToken
 */
export const saveJwtTokenToStorage = jwtToken => {
    sessionStorage.setItem('jwtToken', jwtToken)
}

/**
 * Get jwtToken from SessionStorage
 * @returns {string | null}
 */
export const getJwtTokenFromStorage = () => sessionStorage.getItem('jwtToken')

/**
 * Removes jwtToken and user from SessionStorage
 */
export const nukeJwtToken = () => sessionStorage.clear()
