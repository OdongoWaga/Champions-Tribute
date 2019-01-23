import React from 'react'
import Header from '../H&F/Header';
import Footer from '../H&F/Footer';

const Layout = (props) => {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
} 

export default Layout;
