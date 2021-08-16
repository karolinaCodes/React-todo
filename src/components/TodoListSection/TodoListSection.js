import React from 'react'
import {Fragment} from 'react'
import TodoList from './List/TodoList'
import TodoListFooter from './Footer/TodoListFooter'
import styles from './TodoListSection.module.css'

const TodoListSection=(props)=>{return (<div id={styles.listSection}><TodoList/><TodoListFooter/></div>)}

export default TodoListSection