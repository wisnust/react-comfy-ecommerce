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
            path='/checkout'
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
