import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useStats = (api: string) => {
    const [stats, setStats] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                console.log('getting virus data')
                await axios.get(api)
                    .then(res => setStats(res.data))
                    .then(res => console.log(res))
            }
            catch (error) {
                setError(error)
            }
        }
        getData()
    }, [])

    return { stats, error }
}

export default useStats

