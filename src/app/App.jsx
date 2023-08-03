import GlobalStyles from "./style";
import { Routes, Route } from "react-router-dom";
import { InputPage, BoardPage } from "../pages";
import { PostProvider } from "../context/PostContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <PostProvider>
                    <GlobalStyles />
                    <Routes>
                        <Route path="/" element={<InputPage />} />
                        <Route path={process.env.PUBLIC_URL + "/board"} element={<BoardPage />} />
                    </Routes>
                </PostProvider>
            </QueryClientProvider>
        </div>
    );
}

export default App;
