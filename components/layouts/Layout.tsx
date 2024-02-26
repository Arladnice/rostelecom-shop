import React from 'react'
import Header from '@/components/modules/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <div className='' />
  </>
)
export default Layout
