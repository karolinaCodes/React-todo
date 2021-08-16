import React from 'react';
import {Fragment} from 'react'
import styles from './TodoItem.module.css'

const TodoItem= (props)=>{
    return <Fragment><li className={styles.listItem}><button className={styles.checkBtn}/><p className={styles.todo}>{props.todo}</p></li></Fragment>
}

export default TodoItem;