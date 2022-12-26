import React from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const PrivateRoute = ({ component, ...rest }) => {
  const Component = withAuthenticationRequired(component, rest)
  return <Component />
}
export default PrivateRoute
