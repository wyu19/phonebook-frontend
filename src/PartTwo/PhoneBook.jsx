import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
      event.preventDefault()
      const exists = persons.reduce((exist, p) => {
        if(newName === p.name){
          alert(`${newName} is already added to phonebook`)
          return true
        }
        return exist
      }, false)
      if(exists){
        return 
      }
      console.log('button clicked', event.target)
      const nextId = persons.length + 1
      const newPerson = {
        name: newName,
        number: newNumber,
        id: nextId
      }
      const newList = persons.concat(newPerson)
      setPersons(newList)
      const showTheseNames = newList.filter(p => p.name.toLowerCase().startsWith(name))
      setNamesToShow(showTheseNames)
      setNewName('')
      setNewNumber('')
    }
  
    const newNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
    const newNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }
  const [namesToShow, setNamesToShow] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter persons={persons} setNamesToShow={setNamesToShow}></Filter>
      </div>
      <PersonForm
        addContact={addContact}
        newName = {newName}
        newNumber={newNumber}
        newNumberChange={newNumberChange}
        newNameChange={newNameChange}
      />
      <h2>Numbers</h2>
        <Person persons={namesToShow}></Person>
    </div>
  )
}

export default App