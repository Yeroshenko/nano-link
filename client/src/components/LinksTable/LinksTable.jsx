import React from 'react'
import { Table, Empty } from 'antd'

import './ListTable.sass'

const LinksTable = ({ hasLinks, columns, data }) => (
  <div className='list-table'>
    {hasLinks ? (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
        className='list-table__table'
      />
    ) : (
      <Empty
        className='list-table__empty'
        description='Вы еще не создали ни одну ссылку'
      />
    )}
  </div>
)

export default LinksTable
