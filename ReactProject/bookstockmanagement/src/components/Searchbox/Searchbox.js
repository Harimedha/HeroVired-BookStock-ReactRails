import React from 'react'

export default function Searchbox({setinputValue}){


    function handleChange(e){
        console.log("Set input value from search box")
         setinputValue(e.target.value)
    }
    return(
        <>
        <input style={{height:'20px',
                        width:'1000px', 
                        borderRadius:'5px',
                        margin:0}}
        
        placeholder='Search by Book Name or Author' onChange={handleChange}/>
        </>
    )

}
