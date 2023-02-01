import React from 'react'
import { Row, Col} from 'antd'
import UserInfo from '../UserInfo/UserInfo'
import RoomList from '../RoomList/RoomList'

export default function Sidebar() {
  return (
    <div>
      <Row>
        <Col span={24}><UserInfo /></Col>
        <Col span={24}><RoomList /></Col>
    </Row>
    </div>
  )
}
