import React from "react"
import {StaticQuery, graphql} from "gatsby"
import wildebeest from "../assets/svg/wildebeestblack.svg"
import Img from "gatsby-image"
import storyStyles from "./story.module.scss"

const Story = () => (
  <StaticQuery 
  query = {graphql`
  query {
    story: file(relativePath: { eq: "fullcover.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `}
  render={data => {
    const image = data.story.childImageSharp.fluid
    return (
      <section id="story" className={storyStyles.story}>
        <div className={storyStyles.headingContainer}>
            <img className={storyStyles.wildebeest} src={wildebeest} alt="wildebeest" />
            <h2 className={storyStyles.heading}>Introducing Berko...</h2>
        </div>
        <div className={storyStyles.details}>
            <div className={storyStyles.storyImage}>
                <Img fluid={image} alt="chasing the rain cover" />
            </div>
            <div className={storyStyles.description}>
                <p>On the dry, sparse grasslands of the Serengeti, the wildebeest are preparing for the annual migration they have embarked on for millenia. But young Berko isn't thinking of the enemies that lurk beyond the horizon. This season marks his third expedition, and by the time he reaches the woodlands he'll have finally become an adult.</p>
                <p>As the son of the greatest leader in the herd's long history, he has always tried to fade into the herd. But as he heads out on this important journey, he is plagued with fear about his own future. Lying beyond the woodlands are the sacred grounds and a rite of passage for all male wildebeest his age. This year will bring the greatest challenge Berko has ever had to face, and will push his relationship with his best friend to the very limits.</p>
                <p>On the Savannah your fate is already written in the stars. Can Berko discover his spirit and learn of his own true destiny?</p>
            </div>
        </div>
      </section>
    )
  }}
  />
)

export default Story