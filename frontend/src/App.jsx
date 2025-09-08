import React from 'react'
import Header from './components/Header'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/dashboard'
import Products from './pages/products'
import AddProduct from './components/AddProducts'
import UpdateProduct from './components/UpdateProduct'
import Cart from './components/Cart'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/addProducts' element={<AddProduct/>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App