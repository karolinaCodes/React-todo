import React from 'react';
import { Fragment } from 'react';
import styles from "./TodoInput.module.css"

const TodoInput=(props)=>{return <div id={styles.header}>
    <button id={styles.checkBtn}/><input type="text" placeholder="Create a new todo..." id={styles.input}/>
</div>}

export default TodoInput;