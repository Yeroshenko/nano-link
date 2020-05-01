import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './routes'
import { useAuth } from './hooks'
import { AuthContext } from './context'
import { NavBar, Loader } from './components'

const App = () => {
  const { login, logout, token, userId, ready } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if (!ready) {
    return <Loader />
  }
  return (
    <div className='app'>
      <AuthContext.Provider
        value={{
          login,
          logout,
          token,
          userId,
          isAuth
        }}
      >
        <Router>
          {isAuth && <NavBar />}
          {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
