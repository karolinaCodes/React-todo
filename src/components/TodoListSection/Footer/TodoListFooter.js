import React from 'react';
import {Fragment} from 'react'
import styles from './TodoListFooter.module.css'

const TodoListFooter= (props)=>{return <Fragment>
    <ul id={styles.footerList}>
        <li>
            5 Items left
        </li>
        <li>
            <div id={styles.centerOptions}>
            <p className={styles.centerOptionsP}>All</p>
            <p className={styles.centerOptionsP}>Active</p>
            <p className={styles.centerOptionsP}>Completed</p>
            </div>
        </li>
        <li id={styles.clearCompleted}>
            Clear Completed
        </li>
    </ul>
</Fragment>}

export default TodoListFooter