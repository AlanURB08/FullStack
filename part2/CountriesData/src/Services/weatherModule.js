import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY

const getAll = (lat,lon)=> {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    return request.then(response=>response.data)
}
const getIcon = (code) => {
    const request = axios.get(`https://openweathermap.org/img/wn/${code}@2x.png`)
    return request.then(response => response.data)
 }

 export default {getAll,getIcon}