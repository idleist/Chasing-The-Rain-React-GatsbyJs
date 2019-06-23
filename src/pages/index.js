import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Book from "../components/book"
import Author from "../components/author"
import Story from "../components/story"
import styled from "styled-components"
import "../styles/base.scss"



const Index =  ({className}) => (
  <StaticQuery
    query={graphql`
      query {
        mainbg: file(relativePath: { eq: "newcover.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.mainbg.childImageSharp.fluid
      return (
        <BackgroundImage 
          Tag="main"
          className={className}
          fluid={image} 
          backgroundColor={"#000000"}
        >
          <Layout>
            <Book />
            <Author />
            <Story />
          </Layout> 
        </BackgroundImage>
      )
    }}
  />
)

const styledIndex = styled(Index)`
    background-attachment: fixed;
`
export default styledIndex



