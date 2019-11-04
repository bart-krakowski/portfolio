import styled from 'styled-components'

const Footer = styled.footer`
  position: relative;
  padding: 0 75px;
  min-height: calc(100vh - 140px);
  align-items: center;
  background:linear-gradient(180deg, rgba(27, 27, 36, 0) 0%, rgb(27, 27, 36) 10%, rgb(27, 27, 36) 90%, rgba(27, 27, 36, 0) 95%);
  display: flex;
`

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * + * {
    margin-top: 50px;

    ${({theme}) => theme.media.tablet}  {
      margin-top: 100px;
    }
  }
`

const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * + * {
    margin-top: 50px;

    ${({theme}) => theme.media.tablet} {
      margin-top: 0;
    }
  }
`

const BackgroundText = styled.span`
  font-family: ${({theme}) => theme.fonts.typefaces.heading};
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.white};
  opacity: 0.05;
  font-size: 12vw;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  pointer-events: none;

  ${({theme}) => theme.media.tablet} {
    transform: translateY(calc(-50% - 55px));
  }
`

const FooterColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({theme}) => theme.media.tablet} {
    width: 50%;
    padding: 0 55px;
  }
`

const FooterColumnInner = styled.div`
  width: 100%;

  ${({theme}) => theme.media.tablet} {
    width: auto;
  }
`

const FooterTitle = styled.span`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.typefaces.normal};

  + * {
    display: block;
    margin-top: 16px;
  }
`

const FooterLink = styled.a`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.typefaces.normal};
  text-decoration: none;

  ${({theme}) => theme.media.tablet} {
    font-size: 24px;
  }
`

export { Footer, FooterWrapper, BackgroundText, FooterColumn, FooterTitle, FooterLink, FooterColumnInner, FooterInner }