
import { useState } from 'react'
const Filter = (props) =>{

const [filterValue, setFilterValue] = useState([])
const persons = props.persons

const filterChange = (event) => {
    setFilterValue(event.target.value)
    const name = event.target.value
    console.log(name)
    if(name === ""){
      props.setNamesToShow(persons)
    }
    const showTheseNames = persons.filter(p => p.name.toLowerCase().startsWith(name))
    console.log(showTheseNames)
    props.setNamesToShow(showTheseNames)
  }

return <div>
    filter shown with<input value={filterValue} onChange={filterChange}></input>
  </div>
}

export default Filter