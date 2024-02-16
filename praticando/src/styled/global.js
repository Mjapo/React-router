import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

  *{
    margin:0;
    padding: 0;
  }


  body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color:rgb(34,34,34);
        max-width: 100%;
        max-height: 100%;
    }

    h1{
      color: white;
      text-align: center;
    }





`
export default GlobalStyled;