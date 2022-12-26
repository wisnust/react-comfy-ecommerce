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

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/products' element={<ProductsPage />} />
          <Route exact path='/products/:id' element={<SingleProductPage />} />
          <Route
            exact
            path='/checkout'
            element={<PrivateRoute component={CheckoutPage} />}
          />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
