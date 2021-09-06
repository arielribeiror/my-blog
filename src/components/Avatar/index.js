import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "me_Original.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 60, height: 60, placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = getImage(avatarImage.childImageSharp)
  return <GatsbyImage image={image} alt="avatar" />
}

export default Avatar
