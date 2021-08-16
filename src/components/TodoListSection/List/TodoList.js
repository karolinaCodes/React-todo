import React from 'react';
import TodoItem from './TodoItem'
import {Fragment} from 'react'
import styles from './TodoList.module.css'

const TodoList = (props)=>
{
    const TodoList= ['Complete online Javascript course', 'Jog around the park 3x', '10 minutes meditation', 'Read for 1 hour', 'Pick up groceries','Complete Todo App on Frontend Mentor']

    return <Fragment id={styles.ulList}>
        <ul id={styles.todoList}>
        {TodoList.map(todo=><TodoItem todo={todo}/>)}
        </ul>
</Fragment>}

export default TodoList