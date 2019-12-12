import React, { useState, useEffect } from 'react'
import {
  FaRegEnvelope,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaDev,
  FaInstagram,
} from 'react-icons/fa'
import { Text } from 'components/common/Text'
import styled from 'styled-components'

const socialIcons = {
  email: <FaRegEnvelope />,
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  medium: <FaMedium />,
  devto: <FaDev />,
  instagram: <FaInstagram />,
}

const titles = {
  email: 'Email',
  linkedin: 'Linkedin',
  github: 'Github',
  medium: 'Medium',
  devto: 'Dev.to',
  instagram: 'Instagram',
}

export const ContactLink = ({ id, href }) => {
  const [hovering, setHovering] = useState(false)
  useEffect(() => {
    console.log('hovering over', id)
  }, [hovering])
  return (
    <ContactLinkItem
      href={href}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <SocialIconContainer>
        {socialIcons[id]}
      </SocialIconContainer>
      <ContactLinkTextContainer>
        {titles[id]}
        <ExtraText>Hovering</ExtraText>
      </ContactLinkTextContainer>
    </ContactLinkItem>
  )
}

const ContactLinkItem = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-size: 22px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  align-items: flex-start;
`

const SocialIconContainer = styled.div`
  margin-right: 0.5em;
`

const ContactLinkTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ExtraText = styled(Text)`
  align-self: flex-end;
`
