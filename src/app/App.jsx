import GlobalStyles from "./style";
import { Routes, Route } from "react-router-dom";
import { InputPage, BoardPage } from "../pages";
import { PostProvider } from "../context/PostContext";

function App() {
    return (
        <div className="App">
            <PostProvider>
                <GlobalStyles />
                <Routes>
                    <Route path="/" element={<InputPage />} />
                    <Route path="/board" element={<BoardPage />} />
                </Routes>
            </PostProvider>
        </div>
    );
}

export default App;
