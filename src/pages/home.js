import React from 'react'
import { Link } from '@reach/router'
import PageContainer from 'containers/PageContainer'
import { Section } from 'components/home/Section'
import { Text, H1 } from 'components/common/Text'

const yekaterinbug =
  'https://en.wikipedia.org/wiki/Yekaterinburg'
const atlanta = 'https://en.wikipedia.org/wiki/Atlanta'
const react = 'https://reactjs.org/'
const reactNative =
  'https://facebook.github.io/react-native/'
const gatsby = 'https://www.gatsbyjs.org/'

export default () => {
  return (
    <>
      <PageContainer>
        {/* Main Heading */}
        <H1>Hi! My Name is Sunny</H1>
        <Section marginTop={0} marginBottom={10}>
          <Text>
            I&apos;m a Full Stack developer from{' '}
            <a
              href={yekaterinbug}
              target="_blank"
              rel="noopener noreferrer"
            >
              Yekaterinburg, Russia
            </a>{' '}
            currently living in{' '}
            <a
              href={atlanta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Atlanta, Georgia
            </a>
            . I love creating awesome web and mobile
            applications that help improve people&apos;s
            lives using technologies like{' '}
            <a
              href={react}
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,{' '}
            <a
              href={reactNative}
              target="_blank"
              rel="noopener noreferrer"
            >
              React Native
            </a>
            ,{' '}
            <a
              href={gatsby}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{' '}
            and more. When I&apos;m not writing code
            I&apos;m a world traveler, gearhead, watch nerd
            and love to get out and meet new people (usually
            with a pint of beer).
          </Text>
        </Section>
        <Section marginTop={50} marginBottom={0}>
          <Text>
            If you want to learn more you can check out my{' '}
            <Link to="/resume">resume</Link>,{' '}
            <Link to="/projects">projects</Link>, or{' '}
            <Link to="/contact">get in touch</Link>
          </Text>
        </Section>
      </PageContainer>
    </>
  )
}
