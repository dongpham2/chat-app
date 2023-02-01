import React from 'react'
import { Row, Col} from 'antd'
import UserInfo from '../UserInfo/UserInfo'
import RoomList from '../RoomList/RoomList'
import styles from './SideBar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Row>
        <Col span={24}><UserInfo /></Col>
        <Col span={24}><RoomList /></Col>
    </Row>
    </div>
  )
}
