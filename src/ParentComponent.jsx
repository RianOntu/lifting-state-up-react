import React, { useEffect, useState } from 'react'
import FirstChildComponent from './FirstChildComponent'
import SecondChildComponent from './SecondChildComponent'

function ParentComponent() {
    const [counter,setCounter]=useState(0);
  
    const countFunc=counter=>{
        
            setCounter(counter+1)
       
        
       }
 
    
   
    return (
        <>
        <FirstChildComponent  counterFunc={()=>countFunc(counter)}/>
        <SecondChildComponent count={counter} counterFunc={()=>countFunc(counter)}/>
        </>
    )
}

export default ParentComponent
