import {Main} from './styles/main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./pages/category";
import "./index.css"

function App() {
    return (
        <>
            <Main/>
            <BrowserRouter>
                <Routes>
                    <Route path="category" element={<Category/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
