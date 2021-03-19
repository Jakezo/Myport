import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior: smooth;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }

    @font-face { font-family: 'IBM-REG'; src: url(../fonts/IBMPlexSansKR-SemiBold.ttf) format('truetype'); font-style:normal; font-weight:normal; }
    @font-face { font-family: 'IBM-REG'; src: url(../fonts/IBMPlexSansKR-Bold.ttf) format('truetype'); font-style:normal; font-weight:bold; }
    body{
        font-family: 'IBM-REG',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        color:#333;

    }
`;

export default globalStyles;
