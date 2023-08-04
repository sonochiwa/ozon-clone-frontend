import styled, {createGlobalStyle} from 'styled-components';

export const Main = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Accent Color */
    --primary_blue: #005BFF;
    
    /* Typography */
    --text_light: #707F8D;
    --text_dark: #001a34;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeaderH1 = styled.h1`
  font-size: 30px;
  font-family: 'GT Eesti Pro', sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 38px;
  margin-bottom: 17px;
`;