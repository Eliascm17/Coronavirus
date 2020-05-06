import React from 'react'
import useStats from '../helper/useStats'

interface IStatsProps {
    stateData: any;
    stateName: String
}

export const Stats = ({ stateData, stateName}: IStatsProps) => {

    return (
        <>
            {stateData ? 
                <div>
                    <h1>{stateName}</h1>
                    <h2>Positive Cases: {stateData.positive}</h2>
                    <h2>Deaths: {stateData.death}</h2>
                    <h2>Recovered: {stateData.recovered}</h2>
                </div>
            :null}
        </>
    )
}
