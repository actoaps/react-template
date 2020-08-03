import { useState, useEffect, useCallback, useRef } from 'react'
import { getJSONJwt } from '@acto/ajax'

export default function useGetJsonJwt (url, jwt, deps = [], shouldGet = true) {
    const [res, setRes] = useState({ data: null, loading: true, error: null })

    const controllerRef = useRef(null)

    const get = useCallback(() => {
        controllerRef.current = new AbortController()
        getJSONJwt(url, jwt, controllerRef.current)
            .notFound(() => setRes({ data: null, loading: false, error: 404 }))
            .forbidden(() => setRes({ data: null, loading: false, error: 403 }))
            .json(data => setRes({ data, loading: false, error: null }))
            .catch(err => { setRes({ data: null, loading: false, error: err }) })
    }, [url, jwt])

    const cleanup = useCallback(() => {
        controllerRef.current.abort()
    }, [controllerRef])

    useEffect(() => {
        get()
        return cleanup
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [get, cleanup, ...deps])

    return res
}
