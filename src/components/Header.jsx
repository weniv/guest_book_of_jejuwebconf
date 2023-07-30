import { styled } from "styled-components";

export default function Header() {
    return (
        <Cont>
            <BgIcon>
                <div></div>
                <div></div>
                <div></div>
            </BgIcon>
            <h1>2023 jeju web conference</h1>
        </Cont>
    );
}

const Cont = styled.header`
    position: relative;
    width: 100vw;
    height: 62px;
    padding: 22px 0 17px 0;
    background-color: var(--main-color);
    color: var(--white-color);
    text-align: center;
    font-family: "GongGothicMedium";
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
`;

const BgIcon = styled.div`
    display: flex;
    gap: 8px;
    position: absolute;
    top: 24px;
    left: 40px;

    div {
        width: 13px;
        height: 13px;
        border-radius: 7px;
        background-color: var(--white-color);
    }
`;
