import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState()

  const addItem = () => {
    if (!text) {
      alert("Input Text")
      return
    }

    const tempList = [...list]
    tempList.push(text)
    setList(tempList)

    resetState()
  }

  const deleteItem = (index) => {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)

    resetState()
  }

  const editItem = (index) => {
    setText(list[index])
    setEditMode(true)
    setEditIndex(index)
  }

  const updateItem = () => {
    const tempList = [...list]
    tempList[editIndex] = text
    setList(tempList)

    setEditMode(false)
    resetState()
  }

  const resetState = () => {
    setText('')
    setEditMode(false)
  }

  return (
    <div className="App">
      <header className="App-header">

        <h2>Todo List</h2>

        <input
          placeholder='Enter item name'
          onChange={e => setText(e.target.value)}
          value={text}
        />

        {editMode ?
          <button onClick={updateItem}>Update</button>
          :
          <button onClick={addItem}>Add</button>
        }

        <ul>
          {list.map((item, index) => {
            return <li>{item}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editItem(index)}>Edit</button>
            </li>
          })}
        </ul>

        <br />
      </header>
    </div>
  );
}

export default App;
