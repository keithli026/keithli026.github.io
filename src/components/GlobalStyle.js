import styled, { createGlobalStyle, css } from "styled-components/macro";

export const ResetStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: 'Roboto', sans-serif;
}

ul, ol {
  margin: 0;
  line-height: 1.5;
  padding-left: 1.5em;
}

nav ul, nav ol {
  list-style-type: none;
  padding: 0;
  font-weight: 700;
}

nav ul li, nav ol li {
  padding: 0.5rem 0.75rem;
}

nav ul li a, nav ol li a {
  text-decoration: none;
  color: black;
}
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 576px) {
    max-width: ${prop => prop.sm100 ? "unset" : "540px"};
  }
  @media (min-width: 768px) {
    max-width: ${prop => prop.md100 ? "unset" : "720px"};
  }
  @media (min-width: 992px) {
    max-width: ${prop => prop.lg100 ? "unset" : "960px"};
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  ${prop => prop.flexbox && css`
    display: flex;
    flex-direction: column;
  `};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  ${ prop => prop.center && css`
    justify-content: center;
  `}
  ${ prop => prop.spaceBetween && css`
    justify-content: space-between;
  `}
  ${ prop => prop.alignItemsCenter && css`
    align-items: center;
  `}
`;


