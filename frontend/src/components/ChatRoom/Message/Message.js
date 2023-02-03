import React from 'react'
import styles from './Message.module.scss'
import classNames from 'classnames/bind';
import {Avatar, Typography} from 'antd'

const cx = classNames.bind(styles);

export default function Message({ text, displayName, creatAt, photoURL}) {
  return (
    <div className={cx('wrapper')}>
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text className={cx('author')}>{displayName}</Typography.Text>
        <Typography.Text className={cx('date')}>{creatAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text className={cx('content')}>{text}</Typography.Text>
        
      </div>
    </div>
  )
}
