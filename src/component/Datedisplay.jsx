/* Showcase hooks */
// import React from "react"
import React, {useState, useEffect} from 'react';
var today = new Date()

export const Datedisplay = () =>
{
    const [dateState, setDateState] = useState(new Date());
   /*  const getNow = () => {let today = new Date(); return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() } // current time
    const [now, setNow] = React.useState(getNow()) // initialisation
    const handleClick = () => setNow(getNow())  // update time

    
    return (
        <p>The time is: {now} <button onClick={() => { handleClick()}}>Refresh</button></p>
        ) */

    // useEffect Hook example
    useEffect(() => {
      setInterval(() => setDateState(new Date()), 1000);
    }, []);
    
        return <p>The time is:- {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}</p>
}
// <p>The time is: {today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</p>