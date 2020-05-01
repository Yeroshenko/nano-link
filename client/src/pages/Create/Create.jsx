import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Typography, Input } from 'antd'

import { AuthContext } from '../../context'
import { useHttp } from '../../hooks'
import './Create.sass'

const { Title } = Typography

const Create = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()

  const generateLink = async value => {
    try {
      const data = await request(
        '/api/link/generate',
        'POST',
        { from: value },
        { Authorization: `Bearor ${auth.token}` }
      )
      history.push(`/detail/${data.link._id}`)
    } catch {}
  }

  return (
    <div className='create-page'>
      <Title>Сокращение URL и ссылок</Title>
      <Title level={2} className='create-page__subtitle'>
        Упростите свои ссылки и отслеживайте статистику переходов
      </Title>
      <div className='create-page__input'>
        <Input.Search
          placeholder='Вставте длинный URL'
          enterButton='Укоротить'
          size='large'
          className='create-page__input'
          onSearch={generateLink}
        />
      </div>
    </div>
  )
}

export default Create
