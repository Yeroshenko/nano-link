import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

import LinksTable from './LinksTable'

const LinksTableContainer = ({ links }) => {
  const history = useHistory()

  const hasLinks = !!links

  const showStatistics = id => {
    history.push(`/detail/${id}`)
  }

  const columns = [
    { title: '№', dataIndex: 'index', key: 'index' },
    {
      title: 'Оригинальная ccылка',
      dataIndex: 'original',
      key: 'original',
      render: link => (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {link}
        </a>
      )
    },
    {
      title: 'Сокращенная ccылка',
      dataIndex: 'short',
      key: 'short',
      render: link => (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {link}
        </a>
      )
    },
    {
      title: '',
      key: 'id',
      render: ({ id }) => (
        <Button type='primary' onClick={showStatistics.bind(this, id)}>
          Посмотреть статистику
        </Button>
      )
    }
  ]
  const data = links.map((link, index) => {
    return {
      key: link._id,
      index: index + 1,
      original: link.from,
      short: link.to,
      id: link._id
    }
  })

  return <LinksTable hasLinks={hasLinks} columns={columns} data={data} />
}

export default LinksTableContainer
