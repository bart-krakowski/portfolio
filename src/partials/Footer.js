import React from 'react'
import { Footer, FooterWrapper, FooterInner, BackgroundText, FooterColumn, FooterTitle, FooterLink, FooterColumnInner } from './Footer.styled'
import Button from '../components/Button/Button.styled';

export default () => {
  return (
    <Footer>
      <FooterWrapper>
        <BackgroundText>Contacts</BackgroundText>
        <FooterInner>
          <FooterColumn>
            <FooterColumnInner>
              <FooterTitle>Phone:</FooterTitle>
              <FooterLink href="tel:+48503750580">(+48) 503 750 580</FooterLink>
            </FooterColumnInner>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnInner>
              <FooterTitle>Email:</FooterTitle>
              <FooterLink href="mailto: bartlomiej@krakowski.website">bartlomiej@krakowski.website</FooterLink>
            </FooterColumnInner>
          </FooterColumn>
        </FooterInner>
        <Button as="a" href="mailto: bartlomiej@krakowski.website">Start a project</Button>
      </FooterWrapper>
    </Footer>
  )
}
