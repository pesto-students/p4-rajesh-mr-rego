import { useState } from 'react';
import { Form, InputGroup, ListGroup, Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDoList from './ToDoList';
import data from './data.json';

function App() {
  const [inputValue, setInputValue] = useState("");

  const [toDoLists, setToDoLists] = useState([
    // "default list",
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;

    addToDoList(inputValue);
    setInputValue("");
  };

  const addToDoList = (title) => {
    const newToDoLists = [...toDoLists];
    newToDoLists.push(title);
    setToDoLists(newToDoLists);
  }

  return (
    <div className='App'>
      <h1>Many To-Do Lists</h1>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Name a new list"
          />
          <Button variant="primary" id="addToDoList" type='submit'>
            Add To-Do List
          </Button>
        </InputGroup>
      </Form>

      {toDoLists.map((elem) => (
        <ToDoList title={elem}></ToDoList>
      ))}
    </div>
  );
}

export default App;
