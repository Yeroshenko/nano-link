import React, { useContext } from 'react'

import { AuthContext } from '../../context'
import { useHttp } from '../../hooks'
import RegisterForm from './RegisterForm'

export default ({ className }) => {
  const { loading, request, error, clearError } = useHttp()
  const auth = useContext(AuthContext)

  const onSubmit = async values => {
    try {
      const res = await request('/api/auth/register', 'POST', values)
      
      if (res.status === 201) {
        const { email, password } = values
        const data = await request('/api/auth/login', 'POST', { email, password })
        auth.login(data.token, data.userId)
        
      }

      clearError()
    } catch (e) {}
  }

  return (
    <RegisterForm
      className={className}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  )
}
