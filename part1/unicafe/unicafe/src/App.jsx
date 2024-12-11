import { useState } from 'react'


const Button = ({text,onClick})=>{
    return(
      <button onClick={onClick}>{text}</button>
    )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)
  const [average,setAverage]=useState([])

  const handleGoodClick = ()=>{
    const goodR = good+1
    setGood(goodR);
    const allR = all+1
    setAll(allR);    
    const newArr = average.concat(1);
    setAverage(newArr)
  }

  const handleNeutralClick = ()=>{
    const neutralR = neutral +1
    setNeutral(neutralR);
    const allR = all+1
    setAll(allR);
    const newArr = average.concat(0);
    setAverage(newArr)
  }

  const handleBadClick = ()=>{
    const badR = bad+1
    setBad(badR);
    const allR = all+1
    setAll(allR);
    const newArr = average.concat(-1);
    setAverage(newArr)
  }

  const handleAverage = (arr)=>{
    const ave = (arr.reduce((a,b)=>a+b,0))/arr.length;
    return ave;
  }

  

  const handlePositiveCom = (arr)=>{
    const positiveC = arr.filter(num=>num===1);
    const percent = ((positiveC.length*100)/arr.length).toFixed(2)
    return percent
  }

  const StatisticLine = (props)=>{
    return(
      <tbody>
        <tr>
        <td>{props.text}: {props.value}</td>
        </tr>
        
      </tbody>
    )
  }

  const Statictis = ({good,neutral,bad,average})=>{
    if(average.length === 0){
      return (
        <p>No feedback given</p>
      )
    }
    return(
      <table>
        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>
        <StatisticLine text='Average' value={handleAverage(average)}/>
        <StatisticLine text='Percentage' value={handlePositiveCom(average)}/>
        
      </table>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      

      <h1>Statistics</h1>
      <Statictis good={good}
      neutral = {neutral}
      bad = {bad}
      average={average}
      />
      
      
    </div>
  )
}


export default App