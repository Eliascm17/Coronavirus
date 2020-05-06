import React from 'react'
import useStats from '../helper/useStats'

interface IStatsProps {
    stateData: any;
}

export const Stats = ({stateData}: IStatsProps) => {

    return (
        <div>
            <h2>{stateData ? stateData.state : ''}</h2>
        </div>
    )
}
