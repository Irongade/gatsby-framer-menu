import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      shoe1: file(relativePath: { eq: "shoe1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      shoe2: file(relativePath: { eq: "shoe2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      shoe3: file(relativePath: { eq: "shoe3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      shoe4: file(relativePath: { eq: "shoe4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <GatsbyImage  image={data.shoe1.childImageSharp.gatsbyImageData} alt="src" />
      ) : src === 2 ? (
        <GatsbyImage  image={data.shoe2.childImageSharp.gatsbyImageData} alt="src" />
      ) : src === 3 ? (
        <GatsbyImage  image={data.shoe3.childImageSharp.gatsbyImageData} alt="src" />
      ) : (
        <GatsbyImage  image={data.shoe4.childImageSharp.gatsbyImageData} alt="src" />
      )}
    </>
  )
}
