import { useState } from 'react'
import './App.css'
import clsx from 'clsx'

function App() {
  
  function handleForm(formData){        
        const userData = Object.fromEntries(formData)
        const name = formData.get('name')
                
        }
  return (
    <main>
      <form action={handleForm}>
        <label htmlFor="name"></label>
        <input
          id='name'
          name='name'
          type='text'
        />
        <button type='submit'>submit</button>
        
      </form>
      
    </main>
  )
}

export default App
