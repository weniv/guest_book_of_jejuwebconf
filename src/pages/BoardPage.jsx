import { styled } from "styled-components";
import { Header, HigherElements, PostOrange, PostWhite, SubTitle } from "../components";

export default function BoardPage() {
    return (
        <>
            <Header />
            <Main>
                <SubTitle />
                <Board>
                    <HigherElements />
                    <section>
                        <PostWhite content="한여름이 도래하면 즐거운 모래사장, 시원한 바다, 자유로운 여행과 웃음이 함께하는 아름다운 시간.." name="닉네임" />
                        <PostOrange
                            content="한여름 밤, 별들이 빛나는 밤하늘을 바라보며 시간을 잊어버리곤 합니다. 그 유쾌한 풍경과 함께 친구들과 웃음으로 가득한 순간들이 쌓이며 행복한 기억이 된답니다."
                            name="닉네임"
                        />
                        <PostWhite content="한여름이 도래하면 즐거운 모래사장, 시원한 바다, 자유로운 여행과 웃음이 함께하는 아름다운 시간.." name="닉네임" />
                    </section>
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
