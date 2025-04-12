import { useState } from 'react'

const Button = (props) => {
 return <button onClick={props.onClick}>{props.text}</button>
}

const Display = (props) => {
  return <p>{props.text} {props.stat}</p>
}

const Statistics = (props) => {
  if (props.value == 0 && props.text=="total") {
    return <td>No Feedback given</td>
  } else if (isNaN(props.value) ){
    return 
  }
  return <td>{props.text} {props.value}</td>

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = good/total 

  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={()=>setGood(good+1)} text='good'></Button>
      <Button onClick={()=>setNeutral(neutral+1)} text='neutral'></Button>
      <Button onClick={()=>setBad(bad+1)} text='bad'></Button>
      <h1>Statistics</h1>
      <tbody>
        <tr>
        <Statistics text="good" value={good}/>
        </tr>
        <tr>
        <Statistics text="neutral" value={neutral}/>
        </tr>
        <tr>
        <Statistics text="bad" value={bad}/>
        </tr>
        <tr>
        <Statistics text="total" value={total}/>
        </tr>
        <tr>
        <Statistics text="average" value={average}/>
        </tr>
        <tr>
        <Statistics text="positive" value={positive}/>
        </tr> 
      </tbody>


    </div>
  )
}


export default App