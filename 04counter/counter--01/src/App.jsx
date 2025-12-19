import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, anuCounter] = useState(5)

  // counter , setCounter ke jagh kuch bhi name likh skte ho but generally we write this only

  // let counter = 5
  
  const addValue = () => {
  //  counter = counter + 1  
  //  console.log("clicked", Math.random());
   console.log("clicked",counter);
   anuCounter(counter + 1)
  }
  
  const removeValue = () => {
    anuCounter(counter - 1)
    console.log("removed",counter);
  }


  return (
   <>
   <h1>chai aur react</h1>
   <h2>counter value: {counter}</h2>
   <button onClick={addValue}>add value</button>
   <br></br>
   <button onClick = {removeValue}>remove value {counter} </button>
   <p>footer: {counter} </p>
   </>
  )
}

export default App
 