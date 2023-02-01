import React from 'react'
import { Button, Collapse , Typography } from 'antd'
import styles from './RoomList.module.scss'
import classNames from 'classnames/bind';
import styled from 'styled-components';
// import {PlusSquareOutLined } from 
import {
  PlusOutlined
} from "@ant-design/icons";
const { Panel } = Collapse; 

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
      p {
        color: white;
      }
      .ant-collapse-content-box {
        padding: 0 40px;
      }
    }
`
const LinkStyled = styled(Typography.Link) `
    display: block;
    margin-bottom: 5px;
    color: white;
`
const cx = classNames.bind(styles);
export default function RoomList() {
  return (
    <div className={cx("wrapper")}>
      <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled  header="Danh sách các phòng" key='1'>
            <LinkStyled>Room 1</LinkStyled> 
            <LinkStyled>Room 2</LinkStyled> 
            <LinkStyled>Room 3</LinkStyled>        
            <Button type="text" icon={<PlusOutlined />} className={cx('add-room')}>Thêm phòng</Button>
        </PanelStyled>
    </Collapse>
    </div>
  )
}
