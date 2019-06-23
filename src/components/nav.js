import React from "react"
import Wildebeest from "../assets/svg/wildebeest.svg"
import navStyles from "./nav.module.scss"

const Nav = () => (
  <nav className={navStyles.nav}>
    <div>
      <a href="#">
        <img
          className={navStyles.wildebeest}
          src={Wildebeest}
          alt="wildebeest logo"
        />
      </a>
    </div>
    <div className={navStyles.links}>
      <a href="#author" className={navStyles.link}>
        Author
      </a>
      <a href="#story" className={navStyles.link}>
        Story
      </a>
      <a
        className={navStyles.linkBuy}
        href="https://www.amazon.co.uk/Chasing-Rain-James-Rugman/dp/1797415689/ref=la_B07PNMDJTD_1_1?s=books&amp;ie=UTF8&amp;qid=1553780744&amp;sr=1-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy The Book
      </a>
    </div>
  </nav>
)

export default Nav
