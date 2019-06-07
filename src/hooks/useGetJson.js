import { useState, useEffect } from 'react'
import { getJSON } from '@acto/ajax'

export default function useGetJson (url, deps = []) {
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getJSON(url)
            .notFound(() => { setError(404); setLoading(false) })
            .forbidden(() => { setError(403); setLoading(false) })
            .json(products => { setRes(products); setLoading(false) })
            .catch(err => { setError(err); setLoading(false) })
    }, deps)

    return [res, loading, error]
}
