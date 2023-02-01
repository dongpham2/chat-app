import React from 'react'
import { Collapse , Typography } from 'antd'
import styles from './RoomList.module.scss'
const { Panel } = Collapse;


export default function RoomList() {
  return (
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Danh sách các phòng" key='1'>
            <Typography.Link>Room 1</Typography.Link> 
            <Typography.Link>Room 2</Typography.Link> 
            <Typography.Link>Room 3</Typography.Link> 
        </Panel>
    </Collapse>
  )
}