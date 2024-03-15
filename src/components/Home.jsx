import React from 'react'
import { LuPlusCircle } from "react-icons/lu";


import styles from "../components/Home.module.css"



const Home = () => {
  return (
    <div className={styles.header}>Todo List
    <form className={styles.newTaskForm}>
      <input placeholder='add new task' type='text'></input>
      <button>create
        <LuPlusCircle/>
      </button>
      </form> 
    </div>

  )
}

export default Home