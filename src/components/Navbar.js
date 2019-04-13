import { Link } from "gatsby"
import React from "react"
import Wildebeest from "../assets/images/wildebeest.svg"

const Navbar = () => (
  <nav id="navbar">
    <div id="navbar--logo">
      <Link to="/">
        <img id="navbar--wildebeest" src={Wildebeest} alt="wildebeest logo" />
      </Link>
    </div>
    <div id="navbar--links">
      <Link to="/" className="navbar--link">
        Home
      </Link>
      <Link to="/author/" className="navbar--link">
        Author
      </Link>
      <Link to="/story/" className="navbar--link">
        Story
      </Link>
      <a
        href="https://www.amazon.co.uk/Chasing-Rain-James-Rugman/dp/1797415689/ref=la_B07PNMDJTD_1_1?s=books&amp;ie=UTF8&amp;qid=1553780744&amp;sr=1-1"
        className="navbar--link navbar--link-buy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy The Book
      </a>
    </div>
  </nav>
)

export default Navbar
