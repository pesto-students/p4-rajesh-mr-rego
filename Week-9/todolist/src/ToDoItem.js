import React from "react";
import { ListGroup, Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoItem({ elem, index, markTask, removeTask }) {
    return (
        <Stack direction='horizontal'>
            <ListGroup.Item onClick={() => markTask(index)} style={{flex: 20, textDecoration: elem.complete ? "line-through" : ""}}>{elem.task}</ListGroup.Item>
            <Button onClick={() => removeTask(index)} style={{flex: 1}}>X</Button>
        </Stack>
    );
}

export default TodoItem;