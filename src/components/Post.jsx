import { styled } from "styled-components";

export default function Post({ content, name, type, top, left }) {
    return (
        <>
            {content && (
                <Cont type={type} top={top} left={left}>
                    <Header type={type}>
                        <BgIcon>
                            <div></div>
                            <div></div>
                            <div></div>
                        </BgIcon>
                    </Header>
                    <Main>
                        <p>{content}</p>
                        <strong>{name}</strong>
                    </Main>
                </Cont>
            )}
        </>
    );
}

const Cont = styled.article`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    width: 446px;
    min-height: 446px;
    max-height: 586px;
    background-color: ${(props) => (props.type === "white" ? "var(--white-color)" : "var(--point-color)")};
    border: 4px solid var(--main-color);
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 16px 16px 0px var(--main-color);
`;

const Header = styled.div`
    position: relative;
    height: 60px;
    background-color: ${(props) => (props.type === "white" ? "var(--point-color)" : "var(--white-color)")};
    border-bottom: 4px solid var(--main-color);
`;

const BgIcon = styled.div`
    display: flex;
    gap: 9px;
    position: absolute;
    top: 24px;
    left: 24px;

    div {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: var(--main-color);
    }
`;

const Main = styled.div`
    padding: 50px;

    p {
        min-height: 242px;
        margin-bottom: 23px;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 400;
        line-height: 150%;
    }

    strong {
        display: block;
        text-align: right;
        font-family: Pretendard;
        font-size: 32px;
        font-weight: 700;
    }
`;
