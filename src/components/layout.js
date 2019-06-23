import React from "react"
import Nav from "./nav"
import Footer from "./footer"
// import "../styles/base.scss"


const Layout = ({ children }) => (
  
        <React.Fragment>
          <Nav />
          {children}
          <Footer />
        </React.Fragment>
      
)

export default Layout

