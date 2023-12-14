import { Input } from 'antd'
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import React from 'react'

export default function Login() {
  return (
    <div className='formLogin'>
      <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
      <br/>
      <Input size="large" placeholder="large size" prefix={<LockOutlined />} />
    </div>
  )
}
