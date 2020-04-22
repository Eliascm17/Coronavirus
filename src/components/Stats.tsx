import React from 'react'
import useStats from '../helper/useStats'


export const Stats = () => {

    const stateData = useStats('https://covidtracking.com/api/states')
    console.log(stateData)

    //  - this component should pull from an endpoint to get data on all 50 states   
    //  - be able to parse through data and on hover, show data in accordance to each state 

    return (
        <div></div>
    )
}
