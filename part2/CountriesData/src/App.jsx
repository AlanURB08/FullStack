import React from "react"
import myModule from './Services/module'
import './main.css'
import { useState , useEffect} from "react"
import ListCountries from "./Components/listCountries"




function App() {

  const [country,setCountry]=useState([])
  const [name,setName]=useState('')
  

  

  useEffect(()=>{
    myModule
    .getAll()
    .then(response=>{
      setCountry(response)})
      .catch(error1=>{
        console.log('error1', error1)
      })
    },
      [])

  const filterName = country.map(el=>el.name.common)

  const handleInputChange = (event)=>{
    setName(event.target.value)
  }

  const handleClick = (pais)=>{
    setName(pais)
    return(
        <></>
    )
}
  



  return (
    <>
      <label htmlFor="inputCountry">Write a country here: </label>
      <input type="text" placeholder='write a country' id='inputCountry' onChange={handleInputChange}/>
      <ul>
        <ListCountries name={name} filterName={filterName} array={country} handleClick={handleClick}/>
      </ul>
      
    </>
  )
}

export default App
