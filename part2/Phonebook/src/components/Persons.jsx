import React from "react";

const Number = ({name,number})=>{
    return(
<>
<p>{name} - Number : {number}</p>

</>)
}

const Persons =({persons,showAll})=>{
    const filter = persons.filter(number=>number.name.toLocaleLowerCase()===showAll.toLocaleLowerCase());
    return(
        <>
        {filter.map(el=><Number key={el.name} name={el.name} number={el.number} />)}
        </>
        
    )
    
    
}
    
    
    

export default Persons