import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
function SharedLayout() {
  return (
      <>
          <Header />
          <Outlet />{ /* nested yehonutn children yemetasayew b/n Header and Footer nw. the outlet represent children element */}
          <Footer />
      
      </>
  )
}

export default SharedLayout
