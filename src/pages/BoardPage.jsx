import { styled } from "styled-components";
import { Header, HigherElements, Post, SubTitle } from "../components";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function BoardPage() {
    const { postData, setPostData } = useContext(PostContext);
    const postList = postData.map((post, idx) => <Post key={idx} content={post.content} name={post.name} type={post.type} top={post.top} left={post.left} boardZIndex={0} zIndex={post.zIndex} />);
    console.log(postData);

    return (
        <>
            <Header />
            <Main>
                <SubTitle />
                <Board>
                    <HigherElements />
                    <section style={{ position: "relative" }}>{postList}</section>
                    <section style={{ position: "relative", top: "5px", left: "5px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "10px", left: "10px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "15px", left: "15px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "20px", left: "20px" }}>{postList}</section>
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
