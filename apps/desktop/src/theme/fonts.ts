import { createGlobalStyle } from "styled-components";

function font([name]: TemplateStringsArray) {
  return `fonts/${name}`;
}

export default createGlobalStyle`
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Bold.ttf`}) format('truetype');
        font-weight: bold;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Book-Italic.ttf`}) format('truetype');
        font-weight: book;
        font-style: italic; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Book.ttf`}) format('truetype');
        font-weight: book;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Light-Italic.ttf`}) format('truetype');
        font-weight: light;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Light.ttf`}) format('truetype');
        font-weight: light;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Medium-Italic.ttf`}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Medium.ttf`}) format('truetype');
        font-weight: normal;
        font-style: normal; 
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Semibold-Italic.ttf`}) format('truetype');
        font-weight: semibold;
        font-style: italic;
    }
    
   @font-face {
        font-family: 'Whitney';
        src: url(${font`Whitney-Semibold.ttf`}) format('truetype');
        font-weight: semibold;
        font-style: normal; 
    }
`;
