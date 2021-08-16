import { Fragment } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoListSection from "./components/TodoListSection/TodoListSection";
import Header from "./components/UI/Header";
import HeaderImage from "./components/UI/HeaderImage";
import styles from "./App.module.css";

function App() {
  return (
    <Fragment>
      <HeaderImage />
      <div id={styles.mainContent}>
        <Header />
        <TodoInput></TodoInput>
        <TodoListSection />
        <p id={styles.dragAndDrop}>Drag and drop to reorder list</p>
        <div class={styles.attribution}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Karolina Swislocki</a>.
        </div>
      </div>
    </Fragment>
  );
}

export default App;
