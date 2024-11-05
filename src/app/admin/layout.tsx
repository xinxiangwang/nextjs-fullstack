'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, theme } from 'antd'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <div className="w-[100vw] h-[100vh]">{children}</div>
      </ConfigProvider>
    </AntdRegistry>
  )
}
