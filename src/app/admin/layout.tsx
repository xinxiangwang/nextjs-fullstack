'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <div className='w-[100vw] h-[100vh]'>{children}</div>
    </ConfigProvider>
  )
}