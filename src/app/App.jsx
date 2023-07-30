import GlobalStyles from "./style";
import { Routes, Route } from "react-router-dom";
import { InputPage, BoardPage } from "../pages";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<InputPage />} />
                <Route path="/board" element={<BoardPage />} />
            </Routes>
        </div>
    );
}

export default App;
