import React from 'react'
import { Row, Col} from 'antd'
import Sidebar from './SideBar/Sidebar'
import ChatWindow from './ChatWindown/ChatWindow'

export default function ChatRoom() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Sidebar/>
        </Col>
        <Col span={18}>
          <ChatWindow/>  
        </Col>
      </Row>
    </div>
  )
}
