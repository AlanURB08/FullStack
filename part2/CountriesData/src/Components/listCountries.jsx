import React from "react";
import Weather from "./Weather";

const Info = ({array})=>{
    return(
        <>
        <p>Capital : {array.capital}</p>
        <p>Area : {array.area}</p>
        </>
    )
}

const Lenguages = ({array})=>{
    
const lengua = Object.values(array.languages).map(value=>value)


return(
    <>
    {lengua.map(el=><p key={el}>{el}</p>)}
    
    </>
)
}

const Img = ({array})=>{
    const images = Object.values(array.flags).map(value=>value)
    
    return(
        <>
        <img src={images[0]} alt="" />
        </>
    )
}



const ListCountries = ({name, filterName, array, handleClick})=>{

    const pais = filterName.filter(item=>item.toLowerCase().startsWith(name.toLowerCase()))

    if(name===''|| pais.length === 0){
        return 
    }
    
    if(pais.length > 10){
        return(
            <div>Too many matches, specify another filter</div>
        )
    }else if(pais.length <= 10 && pais.length > 1){
        return(
            pais.map(el=>{
                return (
                <>
                <li key={el}>{el} </li>
                <button  onClick={()=>handleClick(el)}>Show</button>
                
                </>
            
        )})
        )
    }
    const main = array.findIndex(user=>user.name.common == pais)
    
    
    return(
        
        <>
        <h1>{array[main].name.common}</h1>
        <Info array={array[main]}/>
        <strong>Lenguages: </strong>
        <Lenguages array={array[main]}/>
        <Img array={array[main]}/><br></br>
        <Weather lat={array[main].latlng[0]} lon={array[main].latlng[1]}/>
        </>
    )

}

export default ListCountries