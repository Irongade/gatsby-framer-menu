import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <div className="banner">
      <div className="inner-banner">
        <div className="container">
          <h1 className="main-headline small">Click on the menu button</h1>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
