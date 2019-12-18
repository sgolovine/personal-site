import React from 'react'
import Home from 'pages/home'
import Projects from 'pages/projects'
import Contact from 'pages/contact'
import { Router } from '@reach/router'
import { Header } from 'containers/Header'
import PageContainer from 'containers/PageContainer'

const SiteRouter = () => (
  <Router>
    <Home path="/" />
    <Projects path="/projects" />
    <Contact path="/contact" />
  </Router>
)

export default () => {
  return (
    <>
      <Header />
      <PageContainer>
        <SiteRouter />
      </PageContainer>
    </>
  )
}
