import React from 'react'

// function Greet(){

//     return <h1>Hello Computer</h1>
// }

//const Greet=()=><h1>Hello Science</h1>

//export const Greet=()=><h1>Hello DCS</h1>  //when use the export before const,{Greet} should be import in App.js

//using props
const Greet=({name,heroName})=>{
    //console.log(props)
    
    return(
        <div>
            <h1>Hello {name}  a.k.a  {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
 
}



export default Greet;