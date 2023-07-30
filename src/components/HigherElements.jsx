import { styled } from "styled-components";
import Bg1 from "../assets/bg-1.svg";
import Bg2 from "../assets/bg-2.svg";
import Bg3 from "../assets/bg-3.svg";
import Bg4 from "../assets/bg-4.svg";
import Bg7 from "../assets/bg-7.svg";
import Bg8 from "../assets/bg-8.svg";
import Bg9 from "../assets/bg-9.svg";
import Bg11 from "../assets/bg-11.svg";
import Bg12 from "../assets/bg-12.svg";

export default function HigherElements() {
    return (
        <Cont>
            <Element1 src={Bg1} alt="" />
            <Element2 src={Bg2} alt="" />
            <Element3 src={Bg3} alt="" />
            <Element4 src={Bg4} alt="" />
            <Element7 src={Bg7} alt="" />
            <Element8 src={Bg8} alt="" />
            <Element9 src={Bg9} alt="" />
            <Element11 src={Bg11} alt="" />
            <Element12 src={Bg12} alt="" />
        </Cont>
    );
}

const Cont = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000000000;
`;

const Element1 = styled.img`
    position: absolute;
    top: 269px;
    left: 98px;
`;

const Element2 = styled.img`
    position: absolute;
    top: 50px;
    left: 1410px;
`;

const Element3 = styled.img`
    position: absolute;
    top: 36px;
    left: 614px;
`;

const Element4 = styled.img`
    position: absolute;
    top: 36px;
    left: 545px;
`;

const Element5 = styled.img`
    position: absolute;
`;

const Element6 = styled.img`
    position: absolute;
`;

const Element7 = styled.img`
    position: absolute;
    top: 482px;
    left: 1312px;
`;

const Element8 = styled.img`
    position: absolute;
    top: 482px;
    left: 1402px;
`;

const Element9 = styled.img`
    position: absolute;
    top: 132px;
    left: 1567px;
`;

const Element10 = styled.img`
    position: absolute;
`;

const Element11 = styled.img`
    position: absolute;
    top: 514px;
    left: 445px;
`;

const Element12 = styled.img`
    position: absolute;
    top: 813px;
    left: 1152px;
`;
