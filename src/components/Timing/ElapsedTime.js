import React from 'react'
import './Timing.scss';
import formatDuration from 'format-duration'

function elapsedTime(events) {

    let elapsed = 0

    for (let i = 0; i < events.length; i += 2) { //loop over events 2 steps at a time

        //console.log(events[i]); //every
        // console.log(events[i + 1]); //every

        const start = events[i];  // =start
        // const stop = events[i + 1];
        const stop = events[i + 1] || new Date()  // = stop if exists, otherwise new Date

        elapsed += stop - start

        //if our stop is missing, it means the timer is paused
        //console.log(stop - start);
    }

    //'00:00'
    // return (elapsed / 1000).toFixed(0) //seconds instead of milliseconds and no decimal  
    return elapsed
}

//stateless component
//function ElapsedTime(props) {

const ElapsedTime = props => {
    return (
        <div className="digits">

            {formatDuration(elapsedTime(props.timerEventsProp))}

        </div>
    )
}
export default ElapsedTime