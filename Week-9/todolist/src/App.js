import { useState } from 'react';
import './App.css';
import data from './data.json';
import { Form, InputGroup, ListGroup, Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './ToDoItem';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    // console.log("handle", inputValue);
    addTask(inputValue);
    setInputValue("");
  };

  const addTask = (elem) => {
    const newToDo = [...toDoList];
    newToDo.push(
      {
        "task": inputValue,
        "complete": false
      }
    );
    setToDoList(newToDo);
  }

  const markTask = (index) => {
    const newToDo = [...toDoList];
    console.log('marktask:', newToDo[index]);
    newToDo[index].complete = !newToDo[index].complete;
    console.log('marktask:', newToDo[index]);
    setToDoList(newToDo);
  }

  const removeTask = (index) => {
    const newToDo = [...toDoList];
    console.log('removing:', newToDo[index]);
    newToDo.splice(index, 1);
    setToDoList(newToDo);
  }

  const handleCleanup = () => {
    console.log("trying to clean up");
    let newToDo = [...toDoList];
    newToDo = newToDo.filter((item) => !item.complete);
    setToDoList(newToDo);
  }

  return (
    <div className="App">
      <h1>This is a To-Do list</h1>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Enter a new task here"
          />
          <Button variant="primary" id="addTask" type='submit'>
            Add Task
          </Button>
          <Button variant="secondary" id="cleanup" onClick={() => handleCleanup()}>
            Cleanup
          </Button>
        </InputGroup>
      </Form>

      <Stack>
        <ListGroup variant='flush'>
          {toDoList.map((elem, index) => (
            <TodoItem
            key={index}
            elem={elem}
            index={index}
            markTask={markTask}
            removeTask={removeTask}></TodoItem>
          ))}
        </ListGroup>
      </Stack>      
    </div>
  );
}

export default App;
