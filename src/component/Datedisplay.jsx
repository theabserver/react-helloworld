import React from "react"
var today = new Date();
export const Datedisplay = () => <p>The time is: {today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</p>
