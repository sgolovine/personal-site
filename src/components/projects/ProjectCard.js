import React from 'react'
import { H2, Text } from 'components/common/Text'
import styled from 'styled-components'
import {
  FaGithub,
  FaInternetExplorer,
  FaAppStore,
} from 'react-icons/fa'
// import { colors } from 'colors'

export const ProjectCard = (props) => {
  const getIcon = (icon) => {
    const iconStyle = {
      fontSize: '22px',
    }
    switch (icon) {
      case 'github':
        return <FaGithub style={iconStyle} />
      case 'web':
        return <FaInternetExplorer style={iconStyle} />
      case 'appstore':
        return <FaAppStore style={iconStyle} />
      default:
        return null
    }
  }
  return (
    <ProjectCardContainer>
      <HeaderContainer>
        <HeaderName>{props.project.name}</HeaderName>
      </HeaderContainer>
      <Text>{props.project.description}</Text>
      <SitesContainer>
        {props.project.sites &&
          props.project.sites.map((site) => {
            return (
              <ExternalLink href={site.url || '#'}>
                {getIcon(site.icon) || 'S'}
              </ExternalLink>
            )
          })}
      </SitesContainer>
    </ProjectCardContainer>
  )
}

const ProjectCardContainer = styled.div`
  height: 120px;
`

const HeaderContainer = styled.div`
  display: flex;
  flexdirection: row;
  align-items: flex-end;
  width: 40%;
`

const SitesContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderName = styled(H2)`
  width: 40%;
`

const ExternalLink = styled.a`
  text-decoration: none;
  margin-right: 2em;
  :hover {
    color: grey;
    background-color: transparent;
  }
`
