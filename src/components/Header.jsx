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
    height: 124px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-color);
    color: var(--white-color);
    font-family: "GongGothicMedium";
    font-size: 40px;
    font-weight: 500;
    text-transform: uppercase;
`;

const BgIcon = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    top: 48px;
    left: 80px;

    div {
        width: 27px;
        height: 27px;
        border-radius: 27px;
        background-color: var(--white-color);
    }
`;
