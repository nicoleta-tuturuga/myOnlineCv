import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
  
  .img-container {
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, ${({ theme }) => theme.backgroundImageShadow});
  }
  .root-parent-myCV{
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, ${({ theme }) => theme.backgroundImageShadow});
  }
  .contact-img-container{
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, ${({ theme }) => theme.backgroundImageShadow});    
  }`;