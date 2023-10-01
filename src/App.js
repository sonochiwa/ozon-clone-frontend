import {Main} from './styles/main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Categories from "./pages/categories";
import "./index.css"
import Index from "./pages";

function App() {
    return (
        <>
            <Main/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
