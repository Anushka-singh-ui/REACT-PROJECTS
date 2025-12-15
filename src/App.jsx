import { useState, useCallback } from 'react'
import './App.css' // keep if needed; ensure it doesn't override colors

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  return (
  
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className='text-white text-center my-3'>Password passwordGenerator</h1>
        
 

     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      />
     

      <button 
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}

        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}/>
        <label>length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        
        <input 
        type="checkbox"
        
       dafultChceked={numberAllowed}
       id="numberInput"
       onChange={() => {
        setNumberAllowed((prev) => !prev);
       }}
        />
        <label htmlFor="numberInput"> Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
       
       dafultChceked={charAllowed}
       id="charInput"
       onChange={() => {
        setCharAllowed((prev) => !prev);
       }}
        />
        <label htmlFor="charInput"> Special Characters</label>
      </div>
     </div>
     <div className='mt-4'>
      <button 
      onClick={passwordGenerator}
      className='w-full bg-green-600 text-white py-1 rounded-lg hover:bg-green-700 transition-colors'>Generate Password</button>
      </div>
     </div>
   
    
  )
}

export default App

