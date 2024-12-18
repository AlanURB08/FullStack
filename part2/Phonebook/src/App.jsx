import { useState, useEffect} from 'react'
import SearchFilter from './components/SearchFilter'
import React from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import AllPersons from './components/AllPersons'
import myModule from './services/number'
import Notification from './components/Notifications'
import NotificationError from './components/NotificacionError'
import './main.css'


const App = () => {

  

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber]= useState('')

  const [showAll,setShowAll]=useState('')
  const [noti,setNoti]=useState('')
  const [notiwrong,setNotiWrong]=useState('')

  useEffect( ()=>{
    myModule
    .getAll()
    .then(initialData=>{
      setPersons(initialData)
    })
    },[])


  const addName = (event)=>{ 
    event.preventDefault();
      const exist = persons.some(el=>el.name===newName)
      if(exist){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
          const element = persons.find(el=>el.name===newName)
          const addNumber = {...element,number: newNumber}
          myModule
          .update(element.id, addNumber)
          .then(returnedNumber => {
            setPersons(persons.map(el=>el.id !== element.id ? el : returnedNumber))
          })
          .then(
            setNoti(`Added ${addNumber.name}`),
            setTimeout(()=>{
              setNoti('')
            },5000)
          )
          .catch(error=>{
            setNotiWrong('Something went wrong')
            setTimeout(()=>{
              setNotiWrong('')
            },4000)
          })
          
        }
        
      }else{ 
      const newObj = {
        name: newName,
        number : newNumber,
      }
      myModule
      .create(newObj)
      .then(data=>{
        setPersons(persons.concat(data))
      setNewName('')
      setNewNumber('')
        
      })
      .then(
        setNoti(`Added ${newObj.name}`),
        setTimeout(()=>{
          setNoti('')
        },4000)
      )
      
      } 
    }

  const eliminateNumber = (id,name)=>{
    if(window.confirm(`Do you want to delete ${name} from de server?`)){
      myModule
    .deleteMethod(id)
    .then(()=>
      myModule
      .getAll()
      .then(result=>{setPersons(result)})
    ).catch(error=>{
      setNotiWrong(
        `Information of ${name} has already been removed from the server`
      )
      setTimeout(()=>{
        setNotiWrong('')
      },5000)
      
    })
    
    }

    }
 
  

  const handleChange = (event)=>{ 
    setNewName(event.target.value)
    
  }
  const handleChangeNumber = (event)=>{ 
    setNewNumber(event.target.value)
    
  }
  const handleFilterChange = (event)=>{ 
    setShowAll(event.target.value)
    
  }
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={noti}/>
      <NotificationError message={notiwrong}/>
      
      <SearchFilter showAll={showAll} handleFilterChange={handleFilterChange}/>
      <Persons persons={persons} showAll={showAll}/>
      
      <h1>Add a new</h1>
      <PersonForm addName={addName} newName={newName} handleChange={handleChange} handleChangeNumber={handleChangeNumber}
      newNumber={newNumber}/>
      
      <h2>Numbers</h2>
      <AllPersons persons={persons} showAll={showAll} eliminateNumber={eliminateNumber}/>
      
      
    </div>
  )
}


export default App