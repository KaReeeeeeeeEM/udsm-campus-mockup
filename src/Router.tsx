import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./screens/Home";

export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}