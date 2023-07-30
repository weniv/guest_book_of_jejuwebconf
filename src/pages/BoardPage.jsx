import { styled } from "styled-components";
import { Header, HigherElements, SubTitle } from "../components";

export default function BoardPage() {
    return (
        <>
            <Header />
            <Main>
                <SubTitle />
                <Board>
                    <HigherElements />
                </Board>
            </Main>
        </>
    );
}

const Main = styled.main`
    position: relative;
    padding: 0 55px 40px 55px;
`;

const Board = styled.section`
    position: relative;
`;
