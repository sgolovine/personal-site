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
      </ContactLinkTextContainer>
    </ContactLinkItem>
  )
}

const ContactLinkItem = styled.a`
  display: flex;
  flex-direction: row;
  width: 10em;
  height: 2em;
  align-items: center;
  text-decoration: none;
  margin-top: 1em;
  margin-bottom: 1em;
`

const SocialIconContainer = styled.div`
  margin-right: 0.5em;
  font-size: 22px;
  justify-content: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`

const ContactLinkTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  justify-content: center;
  font-family: Roboto Mono;
`

const ExtraText = styled(Text)`
  ${'' /* align-self: flex-end; */}
`
