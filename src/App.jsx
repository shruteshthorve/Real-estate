import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Card from './assets/components/Card'
import AddProperty from './assets/components/AddProperty'
import Login from './assets/components/Login'
import Error from './assets/components/Error'
*/
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*<Card/>
      <AddProperty/>
      <Login/>
        <Error/>
        <AddProperty/>
      */}
      <Card/>
      
    </>
  )
}

export default App
