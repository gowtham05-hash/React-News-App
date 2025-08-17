import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'
import Newsitems from './Components/Newsitems'

function App() {

  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
