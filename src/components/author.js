import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import savannah from "../assets/svg/savannahbg.svg"
import authorStyles from "./author.module.scss"

const Author = () => (
  <StaticQuery 
  query = {graphql`
  query {
    author: file(relativePath: { eq: "author.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `}
  render={data => {
    const image = data.author.childImageSharp.fluid
    return (
      <section id="author" className={authorStyles.author}>
        <img className={authorStyles.bg} src={savannah} alt="savannah background" />
        <h2 className={authorStyles.heading}>About The Author</h2>
        <div className={authorStyles.details}>
            <div className={authorStyles.authorImage}>
                <Img fluid={image} alt="James E Rugman" />
            </div>
            <div className={authorStyles.description}>
                <p>
                    James E. Rugman was born in Bristol, England on March 16th 1982 and now
                    resides in the Cotswold village of Wotton-Under-Edge with his wife
                    Emily.
                </p>

                <p>
                    He is an animal science graduate with a real passion for animal welfare
                    and behaviour. He wrote his debut novel as a hat tip to his studies and
                    as a way of bringing the humble wildebeest to the public’s attention.
                </p>

                <p>
                    Since graduating from university, James has had a long career in animal
                    welfare before moving into teaching animal husbandry at college level.
                </p>
            </div>
        </div>
      </section>
    )
  }}
  />
)

export default Author
