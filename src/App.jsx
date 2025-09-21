import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Users /> */}
    </BrowserRouter>
      </>
  )
}

export default App
