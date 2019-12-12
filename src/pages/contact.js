import React from 'react'
import contact from '~/static/data/contact.json'
import { ContactLink } from 'components/contact/ContactLink'
import styled from 'styled-components'

export default () => {
  const ContactInfo = Object.keys(contact).map((key) => {
    return (
      <ContactLink id={key} key={key} href={contact[key]} />
    )
  })

  return <ContactContainer>{ContactInfo}</ContactContainer>
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`
