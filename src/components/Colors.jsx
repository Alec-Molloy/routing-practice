import React from 'react'

const Colors = props =>{
    return(
        <div>
            <h1 style={{color: props.color, backgroundColor: props.colour}}>The Word is: {props.word}</h1>
        </div>
    )
}

export default Colors;