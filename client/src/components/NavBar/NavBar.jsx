import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Modal } from 'antd'
import {
  PlusCircleOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

import './NavBar.sass'

const NavBar = ({ logout, current, setCurrentPage }) => {
  const showModal = () => {
    Modal.confirm({
      title: 'Вы действительно хотите выйти?',
      icon: <ExclamationCircleOutlined />,
      className: 'navbar__confirm',
      okText: 'Да',
      cancelText: 'Отменить',
      onOk() {
        logout()
      }
    })
  }

  return (
    <Menu
      className='navbar'
      onClick={setCurrentPage}
      selectedKeys={[current]}
      mode='horizontal'
      theme='dark'
    >
      <Menu.Item key='/create'>
        <NavLink to='/create'>
          <PlusCircleOutlined />
          <span className='menu-item__text'>Создать</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='/links'>
        <NavLink to='/links'>
          <UnorderedListOutlined />
          <span className='menu-item__text'>Мои ссылки</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='/logout' onClick={showModal}>
        <LogoutOutlined />
        <span className='menu-item__text'>Выйти</span>
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
