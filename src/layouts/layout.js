/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "../components/Navbar"
import "./styles.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>© 2019 | IdeleistDesign.co.uk</p>
          <a href="https://www.vexels.com/vectors/preview/141426/wildebeest-silhouette">
            Wildebeest silhouette
          </a>
          <span> | designed by Vexels</span>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
