import {useState, useEffect} from 'react'
import {asyncError} from '../utils/errors'

export const useFetch = (path, body = null, skip = false, method = "GET") => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [refetchIndex, setRefetchIndex] = useState(0)

    const refetch = () => setRefetchIndex(preValue => preValue + 1)

    const requestOptions = {
        method: method,
        // headers: myHeaders,
        ...(body) && { body: JSON.stringify(body)},
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
            if (skip) return
            setIsLoading(true)

            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}${path}`)
                const data = await res.json()

                setResponse(data)
                setIsLoading(false)
            } catch (err) {
                asyncError(err, () => {
                    setIsLoading(false)
                })
            }
        }
        fetchData()
    }, [refetchIndex])

    return {
        response,
        error,
        isLoading,
        refetch
    }
}