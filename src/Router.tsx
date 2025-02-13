import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./screens/Login";
import Landing from "./screens/Landing";

export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Landing />} />
        </Routes>
        </BrowserRouter>
    );
}