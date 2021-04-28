/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import { motion } from "framer-motion";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// components
import Header from "./header"
import Menu from "./menu"

// hooks 
import useMousePosition from "../hooks/useMousePosition";

//Styles
import "../styles/App.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)

  const {x, y} = useMousePosition();

  return (
    <>
      <motion.div 
        animate={{
          x: x - 20,
          y: y - 20,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? .8 : 0,
        }}
        transition={{ease: "linear", duration: .2}}
        className="cursor"></motion.div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} location={location} setMenuState={setMenuState} setCursorHovered={setCursorHovered} />
      <Menu x={x} y={y} menuState={menuState} setMenuState={setMenuState} setCursorHovered={setCursorHovered} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
