import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --text: #f0f0f0;
  --background: #111113;
  --primary: #587d20;
  --secondary: #4d4d4d;
  --accent: orange;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
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

li {
  margin-bottom: 0.625em;
}

a {
  text-decoration: none;
  color: var(--text);
}

a:hover {
  text-decoration: underline;
}

svg {
  fill: currentColor;
}

button {
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  cursor: pointer;
}

/* button:hover {
  background-color: var(--accent);
} */
`;

export default GlobalStyle;
