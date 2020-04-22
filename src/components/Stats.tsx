import React from 'react'
import useStats from '../helper/useStats'

interface IStatsProps {
    StateName: String | null;
}

export const Stats = ({StateName}: any) => {

    // const stateData = useStats('https://covidtracking.com/api/states')
    // console.log(stateData)

    // console.log(StateName)

    //  - this component should pull from an endpoint to get data on all 50 states   
    //  - be able to parse through data and on hover, show data in accordance to each state 

    return (
        <div>
            <h1>{StateName}</h1>
        </div>
    )
}
