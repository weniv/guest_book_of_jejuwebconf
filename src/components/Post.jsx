import { styled } from "styled-components";

export default function Post({ id, content, name, type, top, left, boardZIndex, zIndex }) {
    console.log(type);
    return (
        <>
            {content && (
                <Cont type={type} top={top} left={left}>
                    <Header type={type}>
                        <BgIcon>
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
    width: 223px;
    min-height: 223px;
    max-height: 293px;
    background-color: ${(props) => (props.type === "white" ? "var(--white-color)" : "var(--point-color)")};
    border: 2px solid var(--main-color);
    border-radius: 13px;
    overflow: hidden;
    box-shadow: 8px 8px 0px var(--main-color);
`;

const Header = styled.div`
    position: relative;
    height: 30px;
    background-color: ${(props) => (props.type === "white" ? "var(--point-color)" : "var(--white-color)")};
    border-bottom: 2px solid var(--main-color);
`;

const BgIcon = styled.div`
    display: flex;
    gap: 4px;
    position: absolute;
    top: 12px;
    left: 12px;

    div {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: var(--main-color);
    }
`;

const Main = styled.div`
    padding: 30px 25px 25px;

    p {
        margin-bottom: 23px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
    }

    strong {
        display: block;
        text-align: right;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
    }
`;
