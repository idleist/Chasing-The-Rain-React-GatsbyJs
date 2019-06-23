import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.details}>
            <a
                className={footerStyles.linkBuy}
                href="https://www.amazon.co.uk/Chasing-Rain-James-Rugman/dp/1797415689/ref=la_B07PNMDJTD_1_1?s=books&amp;ie=UTF8&amp;qid=1553780744&amp;sr=1-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy The Book
            </a>
            <p>&copy;2019 | idleistdesign.co.uk</p>
            <a 
                href="https://www.vexels.com/png-svg/preview/141426/wildebeest-silhouette" 
                target="_blank"
                rel="noopener noreferrer"
            >
            wildebeest silhouette
            </a> 
            <span> | designed by vexels</span>
        </div>
    </footer>
)

export default Footer