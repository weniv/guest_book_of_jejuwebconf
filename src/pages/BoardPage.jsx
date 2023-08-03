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
        // const API_URL = process.env.REACT_APP_SERVER_HOST;
        try {
            const res = await axios.get("post/");
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const { data, isSuccess } = useQuery(["getPostData"], () => getPostData());

    useEffect(() => {
        let copy = [...postData];

        if (isSuccess) {
            [...data].map((post) => {
                // 0 ~ 23 인덱스를 가진 요소들
                if (Math.floor(post.id / 25) < 1) {
                    copy[post.id - 1].content = post.post_msg;
                    copy[post.id - 1].name = post.author;
                } else {
                    const baseIdx = post.id % 24;
                    const baseValue = Math.floor(post.id / 24);

                    copy[post.id - 1].id = baseIdx + 24;
                    copy[post.id - 1].content = post.post_msg;
                    copy[post.id - 1].name = post.author;
                    copy[post.id - 1].top -= baseValue * 25;
                    copy[post.id - 1].left -= baseValue * 25;
                }
            });

            setPostData(copy);
        }

        setCopyData([...postData].sort((a, b) => a.id - b.id));
        console.log(copyData);
    }, [data]);

    const postList = copyData.map((post, idx) => <Post key={idx} content={post.content} name={post.name} type={post.type} top={post.top} left={post.left} />);

    return (
        <>
            <Header />
            <SubTitle />
            <Main>
                <Board>
                    <HigherElements />
                    <section style={{ position: "relative" }}>{postList}</section>
                </Board>
            </Main>
        </>
    );
}

const Main = styled.main`
    position: relative;
    padding: 0 110px 80px 110px;
    margin: 0 auto;
`;

const Board = styled.section`
    min-width: 1819px;
    position: relative;
`;
