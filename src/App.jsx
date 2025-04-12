import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'
import contactsService from './services/contacts'
const App = () => {
  const [persons, setPersons] = useState([])

  const [namesToShow, setNamesToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notificationMessage, setNewMessage] = useState(null)
  useEffect(() => {
    contactsService.getAll().then((initialContacts) => {
      setPersons(initialContacts)
      setNamesToShow(initialContacts)
    })
  }, [])


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
      const nextId = persons.length + 1
      const newPerson = {
        name: newName,
        number: newNumber,
        id: nextId
      }
      const newList = persons.concat(newPerson)
      setPersons(newList)
      contactsService.create(newPerson).then(response => {
        setPersons(newList)
        setNamesToShow(newList)
        setNewName('')
        setNewNumber('')
        setNewMessage(`Added ${newName}`)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      });
    }
  
    const newNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
    const newNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }

    const onDelete = (name, id) => {
      if (!confirm(`Delete ${name}?`)){
        return
      }
      console.log('ON DELETE', id)
      contactsService.deleteContact(id).then(() => {
        const newList = persons.filter(p => p.id !== id)
        setPersons(newList)
        setNamesToShow(newList)
      })
    }

  return (
    <div>
      <Notification message={notificationMessage} />
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
        {namesToShow.map((p) => ( 
          <Person 
            key={p.id}
            person={p}
            delete={() => onDelete(p.name, p.id)}
          />
        ))}
    </div>
  )
}

export default App