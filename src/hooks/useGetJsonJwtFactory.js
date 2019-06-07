import { useState, useEffect } from 'react'
import { getJSONJwtFactory } from '@acto/ajax'

export default function useGetJsonJwtFactory (history, jwt, pathOnUnauthorized) {
    const getJson = getJSONJwtFactory(history, jwt, pathOnUnauthorized)

    return function useGetJson (url, deps = []) {
        const [res, setRes] = useState([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)

        function get () {
            getJson(url)
                .notFound(() => { setError(404); setLoading(false) })
                .forbidden(() => { setError(403); setLoading(false) })
                .json(products => { setRes(products); setLoading(false) })
                .catch(err => { setError(err); setLoading(false) })
        }
        
        useEffect(get, deps)

        return [res, loading, error, get]
    }
}
