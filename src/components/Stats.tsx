import React from 'react'
import useStats from '../helper/useStats'

interface IStatsProps {
    StateAbb: any;
}

export const Stats = ({StateAbb}: IStatsProps) => {

    //  - this component should pull from an endpoint to get data on all 50 states   
    //  - be able to parse through data and on hover, show data in accordance to each state 

    return (
        <div>
            <h1>{StateAbb}</h1>
        </div>
    )
}
