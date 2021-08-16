import {Fragment} from 'react'
import moonImage from "../../assets/icon-moon.svg"

import styles from './Header.module.css'

const Header=(props)=>{return <div id={styles.headerDiv}>
    <header id={styles.header}>TODO </header> <img id={styles.moonImage} src={moonImage} alt="moon"/></div>}

export default Header