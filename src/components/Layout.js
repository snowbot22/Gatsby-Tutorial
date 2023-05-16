import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

import "normalize.css"
import "../assets/css/main.css"

function Layout({children}) {
  return (
    <React.Fragment>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
  )
}

export default Layout