import React from 'react'
import styles from './ChatWindown.module.scss'
import classNames from 'classnames/bind'
import { Avatar, Button, Form, Tooltip, Input } from 'antd'
import { UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import Message from '../Message/Message'


const cx = classNames.bind(styles)


export default function ChatWindow() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
          <div className={cx('header__infor')}>
            <p className={cx('header__title')}>Room 1</p>
            <span className={cx('header__desc')}>Đây là room 1</span>
          </div>
          <div className={cx('nav__right')}>
          <Button icon={<UsergroupAddOutlined/>} type="text">Mời</Button>
          <Avatar.Group size="small" maxCount={2}>
          <Tooltip title="A">
            <Avatar>A</Avatar>
          </Tooltip>
          <Tooltip title="B">
            <Avatar>B</Avatar>
          </Tooltip>
          <Tooltip title="C">
            <Avatar>C</Avatar>
          </Tooltip>
          <Tooltip title="d">
            <Avatar>d</Avatar>
          </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('content__list-message')} >
          <Message text="Test" photoURL={null} displayName="Dong" creatAt={21082001} />
          <Message text="Test" photoURL={null} displayName="Dong" creatAt={21082001} />
          <Message text="Test" photoURL={null} displayName="Dong" creatAt={21082001} />
          <Message text="Test" photoURL={null} displayName="Dong" creatAt={21082001} />
        </div>
        <Form className={cx('form')}>
          <Form.Item>
            {/* <Input placeholder='Nhập tin nhắn...'  autoComplete="off" /> */}
            <input placeholder='Nhập tin nhắn' className={cx('form-input')}></input>
          </Form.Item>
          <Button type='primary'>Gửi</Button>
        </Form>
      </div>
    </div>
    
  )
}
