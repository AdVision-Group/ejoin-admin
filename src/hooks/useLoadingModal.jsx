import {useState} from 'react'

export const useLoadingModal = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState("INITIAL")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)

    const toggleLoading = bool => [
        setIsLoading(bool)
    ]

    const resetModal = () => {
        setIsLoading(false)
        setStatus("INITIAL")
        setMessage(null)
        setError(null)
    }

    return {
        status,
        isLoading,
        message,
        error,
        toggleLoading,
        setMessage,
        setError,
        setStatus,
        resetModal
    }
        
}