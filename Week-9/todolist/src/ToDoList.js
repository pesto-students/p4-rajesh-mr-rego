import React, { useState } from "react";
import { Form, InputGroup, ListGroup, Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './ToDoItem';
import './App.css';

function ToDoList({ title }) {
    const [toDoList, setToDoList] = useState(
        [{
            "task": "Default task 1",
            "complete": false
        }, {
            "task": "Default task 2",
            "complete": false
        }, {
            "task": "Default task 3",
            "complete": true
        }]);

    const [inputValue, setInputValue] = useState("");
    const [isVisible, setVisible] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue) return;

        addTask(inputValue);
        setInputValue("");
    };

    const addTask = (elem) => {
        const newToDo = [...toDoList];
        newToDo.push(
            {
                "task": elem,
                "complete": false
            }
        );
        setToDoList(newToDo);
    }

    const markTask = (index) => {
        const newToDo = [...toDoList];
        // console.log('marktask:', newToDo[index]);
        newToDo[index].complete = !newToDo[index].complete;
        // console.log('marktask:', newToDo[index]);
        setToDoList(newToDo);
    }

    const removeTask = (index) => {
        const newToDo = [...toDoList];
        // console.log('removing:', newToDo[index]);
        newToDo.splice(index, 1);
        setToDoList(newToDo);
    }

    const handleCleanup = () => {
        // console.log("trying to clean up");
        let newToDo = [...toDoList];
        newToDo = newToDo.filter((item) => !item.complete);
        setToDoList(newToDo);
    }

    const handleDelete = () => {
        let todo = [...toDoList].filter((item) => !item.complete);
        if (todo.length == 0) setVisible(false);
    }

    if (!isVisible) return;

    return (
        <div className="ToDoList" style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
            <h1>{title}</h1>

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
                    <Button variant="warning" id="cleanup" onClick={() => handleCleanup()}>
                        Cleanup
                    </Button>
                    <Button variant="danger" id="delete" onClick={() => handleDelete()}>
                        Delete
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
    )
}

export default ToDoList;