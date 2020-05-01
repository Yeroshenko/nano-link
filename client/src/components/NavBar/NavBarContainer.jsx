import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { AuthContext } from '../../context'
import NavBar from './NavBar'

const NavBarContainer = () => {
  const [current, setCurrent] = useState(null)

  const auth = useContext(AuthContext)
  const loacation = useLocation()

  if (current === '/logout') setCurrent(loacation.pathname) // logout will never be active

  useEffect(() => {
    setCurrent(loacation.pathname)
  }, [loacation])

  const setCurrentPage = e => setCurrent(e.key)
  const logout = () => auth.logout()

  return (
    <NavBar logout={logout} current={current} setCurrentPage={setCurrentPage} />
  )
}

export default NavBarContainer
