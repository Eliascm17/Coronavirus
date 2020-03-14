import React from 'react'
import useStats from '../helper/useStats'

interface props {
    url: string
}

export const Stats: React.FC<props> = ({}) => {
    const stats = useStats<props>({url : 'https://covid19.mathdro.id/api'})

    return (
        <div>
            <div>

            </div>
        </div>
    )
}
