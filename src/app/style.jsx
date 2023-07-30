import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
${reset}

body{
    width: 100vw;
    height: 100vh;
    background-color: #F3EBE0;
    font-family: Pretendard;

    @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
        font-weight: 400;
        font-style: normal;
    }
}

*{
    box-sizing: border-box;
}

.ir {
    position: absolute;
    clip: rect(0,0,0,0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow:hidden;
}

button {
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyles;
