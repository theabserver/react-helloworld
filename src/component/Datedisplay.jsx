import React from "react"
var today = new Date()

export const Datedisplay = () =>
{
    const getNow = () => {let today = new Date(); return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() } // current time
    const [now, setNow] = React.useState(getNow()) // initialisation
    const handleClick = () => setNow(getNow())  // update time

    return (
        <p>The time is: {now} <button onClick={() => { handleClick()}}>Refresh</button></p>
        )
}
{/* <p>The time is: {today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</p> */ }
