'use client'
import { Button, Form, Input } from "antd"

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function AdminLogin() {
  const onFinish = () => {

  }
  const onFinishFailed = () => {

  }
  const [form] = Form.useForm();
  return <Form
     className="mx-auto w-[400px] h-[100vh] flex flex-col justify-center"
     layout="vertical"
    name="basic"
    form={form}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
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
}