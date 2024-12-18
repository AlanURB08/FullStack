import React from "react";

const PersonForm = ({addName,newName,handleChange,handleChangeNumber,newNumber})=>{
    return(
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    )
}

export default PersonForm