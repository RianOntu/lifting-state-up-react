import React, { useState } from 'react'

function FirstChildComponent({counterFunc}) {
    
    return (
        <>
        <button onClick={()=>counterFunc()}>Increase</button>
        </>
    )
}

export default FirstChildComponent
