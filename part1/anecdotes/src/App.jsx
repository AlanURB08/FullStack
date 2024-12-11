import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomAnecdote = ()=>{
    const randomNumber = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomNumber)
  }

  const addVote = ()=>{
    const voute = puntos[selected]+1;
    puntos[selected]=voute
    const copy=[...puntos]
    
    setPuntos(copy)
    console.log(puntos)
    //const newArr = puntos[selected]
    
    

  }

  const Display = (props)=>{
    return(
      <>
      <p>{props.text}</p>
      <p>Has {props.vote} votes</p>
      </>
      
    )
  }

  const DisplayViews = (props)=>{
    const highestAnectode = props.vote;
    const max = highestAnectode.indexOf(Math.max(...highestAnectode))

    return(
      <>
    <p>{anecdotes[max]}</p>
    <p>Has {puntos[max]} votes</p>
    </>
    )
    
  }

  const [selected, setSelected] = useState(0)
  const newArr = Array(anecdotes.length).fill(0);
  const [puntos,setPuntos]=useState(newArr)
  

  

  return (
    <div>
      <Display text={anecdotes[selected]} vote={puntos[selected]}/>
      <button onClick={()=>randomAnecdote()}>Next anecdote</button>
      <button onClick={()=>addVote()} >Vote</button>
      <h1>Anecdote with most views</h1>
      <DisplayViews vote={puntos}/>

    </div>
  )
}

export default App

/*
Necesitamos guardar los votos de cada anecdota (has $n votes)
*/