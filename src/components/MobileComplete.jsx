import styled from "styled-components";
import Check from "../assets/icon-check.svg";

export default function MobileComplete({ setIsComplete }) {
    return (
        <CompleteCont>
            <img src={Check} alt="" />
            <div>
                <strong>작성이 완료되었습니다!</strong>
                <span>참여해주셔서 감사합니다.</span>
            </div>
            <button
                onClick={() => {
                    setIsComplete(false);
                }}
            >
                되돌아가기
            </button>
        </CompleteCont>
    );
}

const CompleteCont = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;

        strong {
            color: var(--main-color);
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.15px;
        }

        span {
            color: var(--gray-color);
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.44px;
        }
    }

    button {
        width: 106px;
        height: 36px;
        border-radius: 6px;
        background: var(--main-color);
        color: var(--white-color);
    }
`;
