import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { useUserContext } from '../context/user_context'

// -- Redirect to home page
const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext()
  if (!myUser) {
    return <Navigate to='/' />
  }
  return children
}

// -- Redirect to Login page
// const PrivateRoute = ({ component, ...rest }) => {
//   const Component = withAuthenticationRequired(component, rest)
//   return <Component />
// }
export default PrivateRoute
