import React from 'react'
import useStats from '../helper/useStats';

export default function Stats() {
    const liveStatesData = useStats("https://api.covidnow.com/v1/usa/states")
    const liveCountiesData = useStats('https://api.covidnow.com/v1/usa/counties')
    if (liveStatesData.stats) {
        console.log(liveStatesData)
        console.log(liveCountiesData)
    }
    return (
        <div>
            
        </div>
    )
}
