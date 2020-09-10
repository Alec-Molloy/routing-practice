import React from 'react'

const Number = props =>{
    return(
        <div>
            {
            isNaN(props.num)
            ?<div><h1>The Word is: {props.num}</h1></div>
            :<div><h1>The Number is: {props.num}</h1></div>
            }
        </div>
    )
}

export default Number;