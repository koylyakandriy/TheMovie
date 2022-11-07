import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { Theme } from './types';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    box-sizing: border-box;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
  }
  
  ul {
	  list-style-type: none;
	  padding: 0;
  }
  
  a {
	  text-decoration:none;
  }

  .slick-dots {
    position: static;
    margin: 6px 0 16px;
    
  }

  .slick-slide {
    width: unset;
  }
  
  .slick-initialized {
    margin: 30px auto 50px;
  }
  
  
  
`;

// export const CustomTheme: Theme = {
// 	colors: {
// 		primary: {
// 			main: red,
// 		},
// 		secondary: {
// 			main: blue,
// 		},
// 		waring: {
// 			main: green,
// 		},
// 	},
// };
