import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/logo.svg";
import axios from "axios";
import { PostContext } from "../context/PostContext";

export default function MobileInput({ setIsComplete }) {
    const { postData, setPostData } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState("");
    const [name, setName] = useState("");

    // console.log(postData[7].content);

    // setPostData()
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    useEffect(() => {
        if (content.length > 100) {
            setContent(content.substr(0, 100));
            window.alert("내용은 100자 이내로 적어주세요!");
        }

        if (name.length > 10) {
            setName(name.substr(0, 10));
            window.alert("닉네임은 10자 이내로 적어주세요!");
        }
    }, [content, name]);

    const handleAddPost = async (e) => {
        e.preventDefault();
        const API_URL = process.env.REACT_APP_SERVER_HOST;
        const config = {
            author: name,
            post_msg: content,
        };

        if (content.length === 0 || name.length === 0) {
            window.alert("내용과 이름을 모두 입력해주세요!");
        } else {
            try {
                const res = await axios.post(API_URL + "post/", config);
                // context에 데이터 저장
                const crrPost = res.data;
                let copy = postData;
                copy[crrPost.id].content = crrPost.post_msg;
                copy[crrPost.id].name = crrPost.author;
                setPostData(copy);
                setIsComplete(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <InputCont>
            {isLoading ? (
                <BgLogo src={Logo} alt="" />
            ) : (
                <MessageBox>
                    <BgIcon>
                        <div></div>
                        <div></div>
                        <div></div>
                    </BgIcon>
                    <label htmlFor="content" className="ir">
                        내용
                    </label>
                    <Content
                        id="content"
                        placeholder="내용을 작성해주세요 :) (100자 이내)"
                        required
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                    <label htmlFor="name" className="ir">
                        이름
                    </label>
                    <Name
                        id="name"
                        type="text"
                        placeholder="이름 혹은 별명 (10자 이내)"
                        required
                        autoComplete="off"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {content.length === 0 || name.length === 0 ? (
                        <button className="disabled" disabled>
                            저장
                        </button>
                    ) : (
                        <button onClick={handleAddPost}>저장</button>
                    )}
                </MessageBox>
            )}
        </InputCont>
    );
}

const InputCont = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const BgLogo = styled.img`
    width: 260px;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-name: ${fadeOut};
    animation-fill-mode: forwards;
`;

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const MessageBox = styled.form`
    width: 294px;
    height: 312px;
    position: relative;
    background-color: var(--white-color);
    border: solid 2px var(--main-color);
    border-radius: 12px;
    padding: 23px;
    animation-duration: 0.25s;
    animation-timing-function: ease-in;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    button {
        position: absolute;
        top: -61px;
        right: 0;
        width: 63px;
        height: 36px;
        border-radius: 6px;
        background: var(--main-color);
        color: var(--white-color);
    }

    button.disabled {
        background: var(--placeholder-color);
    }
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

const Content = styled.textarea`
    width: 100%;
    height: 170px;
    margin-top: 39px;
    border: none;
    outline: none;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    resize: none;

    &::placeholder {
        color: var(--placeholder-color);
    }
`;

const Name = styled.input`
    position: absolute;
    bottom: 23px;
    right: 23px;
    width: 202px;
    border-radius: 6px;
    background: var(--input-color);
    border: none;
    outline: none;
    padding: 9px 16px;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 700;

    &::placeholder {
        color: var(--placeholder-color);
        text-align: center !important;
    }
`;
