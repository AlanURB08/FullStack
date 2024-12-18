import React from "react";

const Number = ({name,number,eliminateNumber})=>{
    return(
<>
<p>{name} - Number : {number} <button onClick={eliminateNumber}>Delete</button></p>

</>)
}
const AllPersons =({persons,eliminateNumber})=>{
    return(
        <>
        {persons.map(el=><Number key={el.name} name={el.name} number={el.number} eliminateNumber={()=>eliminateNumber(el.id,el.name)}/>)}
        </>
    )

}
    
    
    

export default AllPersons