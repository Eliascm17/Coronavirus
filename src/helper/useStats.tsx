import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface props {
    url: string
}

export const Stats: React.FC<props> = (props) =>{
    const [stats, setstats] = useState()

    useEffect(() => {
        async function getData() {
            console.log('getting virus data')
            await axios.get(props.url)
            .then(res => setstats(res.data))
            .then(res => console.log(res))
        }

        getData()
    },)

    return stats
}

