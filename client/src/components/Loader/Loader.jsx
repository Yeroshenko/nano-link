import React from 'react'
import { Spin } from 'antd'

import './Loader.sass'

const Loader = () => (
  <div className='loader'>
    <Spin size='large' tip='Загрузка...' />
  </div>
)

export default Loader
