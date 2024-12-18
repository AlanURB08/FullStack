import axios from "axios";

const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getAll = ()=>{
   const request = axios.get(URL)
   return request.then(response=>response.data)
}

const create = newObject => {
   const request = axios.post(baseUrl, newObject)
 return request.then(response => response.data)
}

export default {getAll , create}