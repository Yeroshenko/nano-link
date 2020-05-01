import React from 'react'
import cn from 'classnames'
import { Form, Input, Button, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const LoginForm = ({ onSubmit, error, loading, className }) => (
  <Form
    name='register-form'
    className={cn('register-form', className)}
    onFinish={onSubmit}
  >
    {error && (
      <Form.Item>
        <Alert message={error} type='error' showIcon />{' '}
      </Form.Item>
    )}

    <Form.Item
      name='email'
      rules={[{ required: true, message: 'Введите пожалуста ваш email!' }]}
    >
      <Input
        prefix={<MailOutlined />}
        type='email'
        placeholder='E-mail'
        size='large'
      />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[{ required: true, message: 'Введите пожалуста ваш пароль!' }]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        type='password'
        placeholder='Пароль'
        size='large'
      />
    </Form.Item>

    <Form.Item>
      <Button type='primary' htmlType='submit' size='large' loading={loading}>
        Войти
      </Button>
    </Form.Item>
    <Link to='/register'>
      <Button type='link' size='large'>
        Зарегистрироваться
      </Button>
    </Link>
  </Form>
)

export default LoginForm
