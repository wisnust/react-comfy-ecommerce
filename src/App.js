import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  HomePage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  AboutPage,
} from './pages'

import styled from 'styled-components'

const Button = styled.button`
  background: green;
  color: white;
`

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/products' element={<ProductsPage />} />
          <Route exact path='/products/:id' element={<SingleProductPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route path='&' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
