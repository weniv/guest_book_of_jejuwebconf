import { styled } from "styled-components";
import Logo from "../assets/logo.svg";
import Magnifier from "../assets/icon-magnifier.svg";
import QRCode from "react-qr-code";
import Triangle from "../assets/triangle.svg";

export default function SubTitle() {
    return (
        <Cont>
            <div>
                <LogoImg src={Logo} alt="" />
                <Desc>
                    <span>QR을 스캔해서 제주 웹컨퍼런스에 소감을 남겨주세요 :)</span>
                    <img src={Magnifier} alt="" />
                </Desc>
            </div>
            <div>
                <QrDesc>
                    소감 작성하기
                    <img src={Triangle} alt="" />
                </QrDesc>
                <QrCont>
                    <StyledQRCode value="https://weniv.github.io/guest_book_of_jejuwebconf/" />
                </QrCont>
            </div>
        </Cont>
    );
}

const Cont = styled.section`
    padding: 0 110px;
    height: 256px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }
`;

const LogoImg = styled.img`
    margin-top: 45px;
    margin-right: 53px;
`;

const Desc = styled.div`
    width: 1158px;
    height: 88px;
    margin-top: 120px;
    padding: 22px 27px 19px 44px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 112px;
    border: 4px solid var(--main-color);
    color: var(--main-color);
    font-family: "GongGothicMedium";
    font-size: 40px;
    font-weight: 500;
`;

const QrDesc = styled.span`
    position: relative;
    width: 306px;
    height: 88px;
    border-radius: 56px;
    background-color: var(--main-color);
    font-family: "GongGothicMedium";
    font-size: 40px;
    font-weight: 500;
    color: var(--white-color);
    text-align: center;
    line-height: 88px;
    margin-top: 120px;
    margin-right: 54px;

    img {
        position: absolute;
        top: 0;
        right: -17px;
    }
`;

const QrCont = styled.div`
    padding: 17px;
    width: 192px;
    height: 192px;
    border-radius: 28px;
    background: var(--main-color);
    margin-top: 38px;

    img {
        width: 158px;
    }
`;

const StyledQRCode = styled(QRCode)`
    width: 158px;
    height: 158px;
    border-radius: 18px;
    background-color: var(--white-color);
    padding: 18px;
`;
