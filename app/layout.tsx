"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import SideNavBar from './components/sidenavbar/sidenavbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [itemName, setItemName] = useState("Home");

  const handleItemClick = (itemName: string) => {
    setItemName(itemName);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavBar onItemClick={handleItemClick}/>
        <div className='main-screen'>
          <div id="main-screen-addorns" className="main-screen-page">
            <div id="main-content">
              {/* <span id="navigation-marker">{itemName}</span> */}
              {children}
            </div>
            <div id="top-left-container">
              <div id="top-left" className="corner"></div>
              <div id="top-left-rounded-corner"></div>
              <div id="top-left-right-triangle"></div>
              <div id="top-left-bottom-triangle"></div>
            </div>
            <div id="bottom-right-container">
              <div id="bottom-right" className="corner"></div>
              <div id="bottom-right-rounded-corner"></div>
              <div id="bottom-right-left-triangle"></div>
              <div id="bottom-right-top-triangle"></div>
            </div>
          </div>    
        </div>
      </body>
    </html>
  )
}
