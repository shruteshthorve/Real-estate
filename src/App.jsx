import { useState } from 'react'


import './App.css'
import ProductDetail from './assets/components/ProductDetail'
/*import Card from './assets/components/Card'
import AddProperty from './assets/components/AddProperty'
import Login from './assets/components/Login'
import Error from './assets/components/Error'
*/


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*<Card/>
      <AddProperty/>
      <Login/>
        <Error/>
        <AddProperty/>
    
      <Card/>*/}
      <ProductDetail/>
      
    </>
  )
}

export default App
