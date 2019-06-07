import { useEffect, useState } from 'react'
import { getJSON } from '@acto/ajax'

export default function useGetJsonWithInterval (url, interval, deps = []) {
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let controller
    let timeout

    function get () {
        controller = new AbortController()
        getJSON(url, controller)
            .notFound(() => { setError(404); setLoading(false) })
            .forbidden(() => { setError(403); setLoading(false) })
            .json(products => {
                setRes(products)
                setLoading(false)
                timeout = window.setTimeout(get, interval)
            })
            .catch(err => { setError(err); setLoading(false) })
    }

    useEffect(() => {
        get()
        return cleanup
    }, deps)

    function cleanup () {
        controller.abort()
        window.clearTimeout(timeout)
    }

    function forceGet () {
        cleanup()
        get()
    }

    return [res, loading, error, forceGet]
}
