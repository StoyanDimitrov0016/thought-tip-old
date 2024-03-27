import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --background-dark: #797872; 
  --background-light: #f5fdf0; 
  --primary: #51829B;
  --secondary: #9BB0C1; 
  --accent: #F6995C; 
  --text: #EEEEEE; 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background-light);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input, button, select, textarea {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 0.5em;
}

img, video {
  max-width: 100%;
  height: auto;
}

ul, ol {
  padding-left: 1.25em;
}

li {
  margin-bottom: 0.625em;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

svg {
  fill: currentColor;
}

button {
  background-color: var(--button-background);
  color: var(--button-text);
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  cursor: pointer;
}

button:hover {
  background-color: var(--accent); /* Accent color on hover */
}
`;

export default GlobalStyle;
