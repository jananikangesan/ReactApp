import React from 'react'

// function Greet(){

//     return <h1>Hello Computer</h1>
// }

//const Greet=()=><h1>Hello Science</h1>

//export const Greet=()=><h1>Hello DCS</h1>  //when use the export before const,{Greet} should be import in App.js

//using props
const Greet=props=>{
    console.log(props)
    
    return(
        <div>
            <h1>Hello {props.name}  a.k.a  {props.heroName}</h1>
            {props.children}
        </div>
    )
 
}



export default Greet;