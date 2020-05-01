import React from 'react'
import { Route } from 'react-router-dom'
import { Typography, } from 'antd'

import { ShadowBlock } from '../../components'
import { RegisterForm, LoginForm } from '../../modules'
import logoIcon from '../../assets/images/logo.svg'
import './Auth.sass'

const { Title } = Typography

const Auth = () => {
  return (
    <section className='auth-page'>
      <ShadowBlock className='auth-page__inner'>
        <div className='auth-page__logo'>
          <img src={logoIcon} alt='Nano link' />
        </div>

        <Title level={2} className='auth-page__title'>
          Nano link
        </Title>

        <p className='auth-page__subtitle'>Новейший сокращатель ссылок</p>

        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route path='/register' component={RegisterForm} />

      </ShadowBlock>
    </section>
  )
}

export default Auth
