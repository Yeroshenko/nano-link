import { createContext } from 'react'

const noop = () => {}

const AuthContext = createContext({
  token: null,
  userId: null,
  userName: null,
  login: noop,
  logout: noop,
  isAuth: false,
})

export default AuthContext