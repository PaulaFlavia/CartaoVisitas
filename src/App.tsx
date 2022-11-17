import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TestimonialItem } from './components/TestimonialItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <div>
  < TestimonialItem />
  <a 
  className='block shadow bg-cyan-300 text-white text-center p-4 mt-5 rounded-xl hover:bg-cyan-400'
  href="http://b7web.com.br/fullstack">Quero evoluir o pokémon"</a>
    </div>
  </div>
  )
}

export default App
