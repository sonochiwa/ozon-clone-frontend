import {Main} from './styles/main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "./pages/categories";
import "./index.css"

function App() {
    return (
        <>
            <Main/>
            <BrowserRouter>
                <Routes>
                    <Route path="category" element={<Categories/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
