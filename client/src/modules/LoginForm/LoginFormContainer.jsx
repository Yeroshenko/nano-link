import React, { useContext } from 'react'
import { message } from 'antd'

import { AuthContext } from '../../context'
import { useHttp } from '../../hooks'
import LoginForm from './LoginForm'

export default ({ className }) => {
  const { loading, request, error, clearError } = useHttp()
  const auth = useContext(AuthContext)

  const onSubmit = async values => {
    try {
      const data = await request('/api/auth/login', 'POST', values)
      clearError()
      auth.login(data.token, data.userId)
      message.success ('Привет, '+ data.name)
    } catch (e) {}
  }

  return (
    <LoginForm
      className={className}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  )
}
