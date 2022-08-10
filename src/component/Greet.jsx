
import React from "react"
import { Datedisplay } from "./Datedisplay"
/* function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Shawn',
  lastName: "D'Souza"
}; */

export const Greet = ({ greeting }) => {
    return <div><p>Hello, {greeting}</p><Datedisplay /></div>
}
// <div>Hello, {greeting}</div> 
// return (<div><p>Hello, {greeting}</p><Datedisplay /></div>)
{/* <div>Hello, {formatName(user)}</div> */}
{/* <Datedisplay /> */}
 

