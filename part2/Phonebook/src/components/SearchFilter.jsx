import React from "react";

const SearchFilter = ({showAll,handleFilterChange})=>{
    return(
        <div>
        Filter shown with: <input value={showAll} onChange={handleFilterChange} />
      </div>
    )

}

export default SearchFilter