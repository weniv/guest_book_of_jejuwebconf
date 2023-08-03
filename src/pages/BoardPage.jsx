import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PostContext } from "../context/PostContext";
import { Header, HigherElements, Post, SubTitle } from "../components";

export default function BoardPage() {
    const { postData, setPostData } = useContext(PostContext);
    const [copyData, setCopyData] = useState([]);

    const getPostData = async () => {
        const API_URL = process.env.REACT_APP_SERVER_HOST;
        try {
            const res = await axios.get(API_URL + "post/");
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const { data, isLoading, isError, error } = useQuery(["getPostData"], () => getPostData());

    useEffect(() => {
        let copy = [...postData];

        data &&
            data.map((post) => {
                copy[post.id - 1].content = post.post_msg;
                copy[post.id - 1].name = post.author;
                copy[post.id - 1].pageCount = Math.floor(post.id / 24) + 1;
            });

        setPostData(copy);
    }, [data]);

    useEffect(() => {
        // postData를 id순으로 정렬
        setCopyData([...postData].sort((a, b) => a.id - b.id));
    }, [postData]);

    const postList = copyData.map((post, idx) => (
        // post.id가 24이상일 때 구현
        // 몫과 나머지를 구해서 몫으로 switch 문 돌리는게 어떨까
        // Post 컴포넌트만 반환할게 아니라 section으로 감싸서 반환하면서 position값까지 지정해주는게 좋을 것 같다
        <Post key={idx} content={post.content} name={post.name} type={post.type} top={post.top} left={post.left} />
    ));

    return (
        <>
            <Header />
            <Main>
                <SubTitle />
                <Board>
                    <HigherElements />
                    <section style={{ position: "relative" }}>{postList}</section>
                    {/* <section style={{ position: "relative", top: "5px", left: "5px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "10px", left: "10px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "15px", left: "15px" }}>{postList}</section>
                    <section style={{ position: "relative", top: "20px", left: "20px" }}>{postList}</section> */}
                </Board>
            </Main>
        </>
    );
}

const Main = styled.main`
    position: relative;
    padding: 0 110px 80px 110px;
`;

const Board = styled.section`
    position: relative;
`;
