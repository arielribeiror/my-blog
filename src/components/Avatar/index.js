import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "eu-colorido-quadrado.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 60, height: 60, placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = getImage(avatarImage.childImageSharp)
  return <S.AvatarWrapper image={image} alt="avatar" />
}

export default Avatar
