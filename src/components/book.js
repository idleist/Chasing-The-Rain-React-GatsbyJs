import React from "react"
import bookStyles from "./book.module.scss"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"


const Book = () => (

    <StaticQuery
    query={graphql`
      query {
        bookcover: file(relativePath: { eq: "compositebooks.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.bookcover.childImageSharp.fluid
      return (
        <section id="book" className={bookStyles.book}>
            <div className={bookStyles.details}>
                <h1 className={bookStyles.title}>
                    Chasing The Rain
                </h1>
                <p className={bookStyles.tagline}>By James E Rugman</p>
            </div>
            <div className={bookStyles.cover}>
                <Img className={bookStyles.bookImage} fluid={image} alt="book formats" />
            </div>
        </section>
      )
    }}
  />
  
)

export default Book