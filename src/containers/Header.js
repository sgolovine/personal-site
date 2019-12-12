import React from 'react'
import { Link } from '@reach/router'
import Headroom from 'react-headroom'
import { FaHome } from 'react-icons/fa'
import { colors } from 'colors'
import styled from 'styled-components'
import { Location } from '@reach/router'

const toggleExperements = false

const paths = {
  '/': 'Sunny Golovine',
  '/resume': 'Resume',
  '/projects': 'Projects',
  '/contact': 'Contact',
}

const fallback = 'Sunny Golovine'

export const Header = ({ children }) => {
  const renderTitle = () => {
    return (
      <Location>
        {(props) => {
          const { pathname } = props.location
          return (
            <Brand>{paths[pathname] || fallback}</Brand>
          )
        }}
      </Location>
    )
  }

  const experementalLinks = () => {
    const paths = ['/resume', '/projects', '/contact']
    return (
      <Location>
        {(props) => {
          const { pathname } = props.location
          const links = paths.map((path) => {
            if (pathname !== path) {
              return (
                <HeaderLink to={path}>{path}</HeaderLink>
              )
            }
          })
          return (
            <>
              {links}

              <HeaderLink to="/">
                <HomeIcon />
              </HeaderLink>
            </>
          )
        }}
      </Location>
    )
  }

  const regularLinks = () => {
    return (
      <>
        <HeaderLink to="/resume">Resume</HeaderLink>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
        <HeaderLink to="/">
          <HomeIcon />
        </HeaderLink>
      </>
    )
  }

  return (
    <>
      <Headroom>
        <Container>
          <Left>{renderTitle()}</Left>
          <Right>
            {toggleExperements
              ? experementalLinks()
              : regularLinks()}
          </Right>
        </Container>
      </Headroom>
    </>
  )
}

const BrandIcon = styled.img`
  height: 36px;
  width: 36px;
  margin-left: 5px;
  margin-right: 5px;
`

const Container = styled.div`
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5em;
  }
`

const Left = styled.div`
  margin-left: 5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    margin-left: unset;
    align-self: center;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5em;
  @media (max-width: 800px) {
    margin-right: unset;
    margin-top: 1em;
    justify-content: space-around;
    margin-left: 20%;
    margin-right: 20%;
  }
  @media (max-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 400px) {
    margin-left: unset;
    margin-right: unset;
  }
`

const Brand = styled.p`
  font-size: 28px;
  font-family: 'Roboto Mono';
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`

const HeaderLink = styled(Link)`
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 0.25em;
  border-radius: 2px;
  font-size: 18px;
  font-family: 'Roboto Mono';
  text-decoration: none;
  color: #fafbfc;
  :hover {
    color: #2b303a;
    background-color: #fafbfc;
  }
  @media (max-width: 800px) {
    margin-left: unset;
    margin-right: unset;
  }
`

const HomeIcon = styled(FaHome)`
  align-self: center;
`
