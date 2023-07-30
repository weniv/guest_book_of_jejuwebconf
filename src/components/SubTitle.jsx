import { styled } from "styled-components";
import Logo from "../assets/logo.svg";
import Magnifier from "../assets/icon-magnifier.svg";
import Qr from "../assets/qr.svg";

export default function SubTitle() {
    return (
        <Cont>
            <div>
                <LogoImg src={Logo} alt="" />
                <Desc>
                    <span>웹컨퍼런스에 참여하신 소감을 자유롭게 작성해주세요 :)</span>
                    <img src={Magnifier} alt="" />
                </Desc>
            </div>
            <div>
                <QrDesc>소감 작성하기</QrDesc>
                <QrCont>
                    <img src={Qr} alt="" />
                </QrCont>
            </div>
        </Cont>
    );
}

const Cont = styled.section`
    height: 128px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }
`;

const LogoImg = styled.img`
    margin-top: 22px;
    margin-right: 26px;
`;

const Desc = styled.div`
    width: 579px;
    height: 44px;
    margin-top: 60px;
    padding: 0 22px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 56px;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    font-family: "GongGothicMedium";
    font-size: 20px;
    font-weight: 500;
`;

const QrDesc = styled.span`
    width: 153px;
    height: 44px;
    border-radius: 28px;
    background-color: var(--main-color);
    font-family: "GongGothicMedium";
    font-size: 20px;
    font-weight: 500;
    color: var(--white-color);
    text-align: center;
    line-height: 44px;
    margin-top: 60px;
    margin-right: 27px;
`;

const QrCont = styled.div`
    padding: 8px;
    width: 96px;
    height: 96px;
    border-radius: 14px;
    background: var(--main-color);
    margin-top: 19px;
`;
