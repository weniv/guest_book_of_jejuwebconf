import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
${reset}

:root {
    --main-color: #ED7A3A;
    --point-color: #FFCE8E;
    --bg-color: #F3EBE0;
    --font-color: #000;
    --gray-color: #908377;
    --placeholder-color: #A4A4A4;
    --input-color: #EFEFEF;
    --white-color: #fff;
}

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

    @font-face {
        font-family: 'GongGothicMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
        font-weight: normal;
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
    font-family: 'GongGothicMedium';
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
}
`;

export default GlobalStyles;
