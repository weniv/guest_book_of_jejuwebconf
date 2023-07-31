import { createContext, useState } from "react";
import { initialState } from "./PostData";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [postData, setPostData] = useState(initialState);

    return <PostContext.Provider value={{ postData, setPostData }}>{children}</PostContext.Provider>;
};
