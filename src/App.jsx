import './App.css'
import Products from './components/Products'
// import Users from './components/Users'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Users /> */}
    </>
  )
}

export default App
