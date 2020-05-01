import React from 'react'
import cn from 'classnames'
import { Card, Statistic, Typography } from 'antd'
import { FundViewOutlined, CalendarOutlined } from '@ant-design/icons'

import './LinkCard.sass'

const { Paragraph } = Typography

const LinkCard = ({ link, className }) => (
  <div className={cn('link-card', className)}>
    <Card className='link-card__inner'>
      <div className='link-card__statistics'>
        <Statistic
          title='Дата создания'
          value={new Date(link.date).toLocaleDateString()}
          prefix={<CalendarOutlined />}
        />
        <Statistic
          title='Количество кликов'
          value={link.clicks}
          prefix={<FundViewOutlined />}
        />
      </div>
      <div className='link-card__links'>
        <div className='link-card__link'>
          <span className='link-card__link-title'>Ваша ссылка: </span>
          <Paragraph copyable={{ text: link.to }} strong>
            <a href={link.to} target='_blank' rel='noopener noreferrer'>
              {link.to}
            </a>
          </Paragraph>
        </div>

        <div className='link-card__link'>
          <span className='link-card__link-title'>Исходная ссылка: </span>
          <Paragraph copyable={{ text: link.from }} strong>
            <a href={link.from} target='_blank' rel='noopener noreferrer'>
              {link.from}
            </a>
          </Paragraph>
        </div>
      </div>
    </Card>
  </div>
)

export default LinkCard
