import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import author from "../assets/images/author.jpeg"

const Author = () => (
  <Layout>
    <SEO
      title="Author"
      keywords={[
        "novel",
        "chasing the rain",
        "james rugman",
        "debut",
        "fiction",
      ]}
    />
    <div id="author">
      <div id="author--heading">
        <h1 className="author--heading">About The Author</h1>
        <img id="author--image" src={author} alt="James E Rugman" />
      </div>
      <div id="author--blurb">
        <p className="author--blurb">
          James E. Rugman was born in Bristol, England on March 16th 1982 and
          now resides in the Cotswold village of Wotton-Under-Edge with his wife
          Emily.
        </p>

        <p className="author--blurb">
          He is an animal science graduate with a real passion for animal
          welfare and behaviour. He wrote his debut novel as a hat tip to his
          studies and as a way of bringing the humble wildebeest to the public’s
          attention.
        </p>

        <p className="author--blurb">
          Since graduating from university, James has had a long career in
          animal welfare before moving into teaching animal husbandry at college
          level.
        </p>
      </div>
      <div id="screen--btns">
        <Link to="/story" className="screen--btn">
          The Story
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

export default Author
