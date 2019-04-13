import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const Story = () => (
  <Layout>
    <SEO
      title="Story"
      keywords={[
        "novel",
        "chasing the rain",
        "james rugman",
        "debut",
        "fiction",
      ]}
    />
    <div id="story">
      <div id="story--heading">
        <h1 id="story--heading" className="story--heading">
          Introducing Berko...
        </h1>
      </div>
      <div id="book--blurb">
        <p className="book--blurb">
          On the dry, sparse grasslands of the Serengeti, the wildebeest are
          preparing for the annual migration they have embarked on for millenia.
          But young Berko isn't thinking of the enemies that lurk beyond the
          horizon. This season marks his third expedition, and by the time he
          reaches the woodlands he'll have finally become an adult.
        </p>
        <p className="book--blurb">
          As the son of the greatest leader in the herd's long history, he has
          always tried to fade into the herd. But as he heads out on this
          important journey, he is plagued with fear about his own future. Lying
          beyond the woodlands are the sacred grounds and a rite of passage for
          all male wildebeest his age. This year will bring the greatest
          challenge Berko has ever had to face, and will push his relationship
          with his best friend to the very limits.
        </p>
        <p className="book--blurb">
          On the Savannah your fate is already written in the stars. Can Berko
          discover his spirit and learn of his own true destiny?
        </p>
      </div>
      <div id="screen--btns">
        <Link to="/author" className="screen--btn">
          Author
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.co.uk/Chasing-Rain-James-Rugman/dp/1797415689/ref=la_B07PNMDJTD_1_1?s=books&amp;ie=UTF8&amp;qid=1553780744&amp;sr=1-1"
          className="screen--btn screen--btn-link"
        >
          Buy Now On Amazon
        </a>
      </div>
    </div>
  </Layout>
)

export default Story
