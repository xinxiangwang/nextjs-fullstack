'use client'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

interface FieldType {
  username?: string
  password?: string
}

export default function AdminLogin() {
  const router = useRouter()
  const onFinish = async (values: FieldType) => {
    const res = await signIn('credentials', { redirect: false, ...values })
    if (!res?.error) {
      router.push('/admin/dashboard')
    }
  }
  return (
    <Form
      className="mx-auto w-[400px] h-[100vh] flex flex-col justify-center"
      layout="vertical"
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">Button</Button>
      </Form.Item>
    </Form>
  )
}
