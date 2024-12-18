import React from "react";
import { useState , useEffect} from "react";
import myWeatherModule from '../Services/weatherModule'




const Weather = ({lat,lon})=>{

    const [weather,setWeather]=useState(null)

    useEffect(()=>{
        myWeatherModule
    .getAll(lat,lon)
    .then(response=>
        setWeather(response))
        .catch(error2=>{
            console.log('error2', error2)
        })
    },[])
    
    console.log('weather', weather)
    /* 
    
    
    
    if(weather.length===0){
        myWeatherModule
        .getAll(lat,lon)
        .then(response=>
            setWeather(response)
        )
    }
        
    */
   if(!weather){
    return alert('Is loading the API')
   }else if(weather){
    return(
        <>
        <h1> Weather on {weather.name}</h1>
        <p>Wind : {weather.wind.speed} m/s</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        <p>Temp : {(weather.main.temp-273.15).toFixed(2)} Celsius</p>
        
        
        
        </>
        
        
    )
   }
    
    
    
}

export default Weather