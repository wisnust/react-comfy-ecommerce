import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <Wrapper>
      <PageHero title='Checkout' />
      <h1>Checkout</h1>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
