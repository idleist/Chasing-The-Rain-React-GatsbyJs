import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import books from "../assets/images/compositebooks.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `novel`,
        `chasing the rain`,
        `james rugman`,
        "debut",
        "fiction",
      ]}
    />
    <div id="home">
      <div id="home--title">
        <h1 id="home--heading">Chasing The Rain</h1>
        <p id="home--tagline">By James E Rugman</p>
      </div>
      <div id="home--image">
        <img id="home--image-formats" src={books} alt="book formats" />
      </div>
      <div id="screen--btns">
        <Link to="/author" className="screen--btn">
          The Author
        </Link>
        <Link to="/story" className="screen--btn">
          The Story
        </Link>
        <a
          href="https://www.amazon.co.uk/Chasing-Rain-James-Rugman/dp/1797415689/ref=la_B07PNMDJTD_1_1?s=books&amp;ie=UTF8&amp;qid=1553780744&amp;sr=1-1"
          target="_blank"
          rel="noopener noreferrer"
          className="screen--btn screen--button-link"
        >
          Buy Now On Amazon
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
