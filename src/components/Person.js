import React from 'react'

function Person({person}) {  //{person} is used to destructuring props purpose
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
