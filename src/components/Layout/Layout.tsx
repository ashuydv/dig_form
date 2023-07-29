import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import GlobalStyle from '@/styles/globalstyle'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  GlobalStyle()

  return (
    <div className="flex h-screen overflow-hidden bg-[#EAEAEA]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="bg-gray-100 text-black border-[2px] border-b-[#131313] p-4 sticky top-0 z-50">
          <Toaster />
          <Header />
        </div>
        <div className=' min-h-min max-h-[90vh] h-full bg-[#EAEAEA] overflow-hidden overflow-y-scroll p-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout