import React from "react"
const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => {
    const total = sum.reduce((a,b)=>a+b.exercises,0)
    return (
        <>
    <strong>Total of exercises: {total}</strong>
        </>
    )
}
    

const Part = ({name,exercises,id }) => 
  <p key={id}>
    {name} : {exercises}
  </p>

const Content = ({ parts }) => 
    parts.map(el=> <Part name={el.name} exercises={el.exercises} key={el.id}/>)


const Course = ({course})=>{

    return (
        <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={course.parts}/>
        </>
        
        
    )
}

export default Course
