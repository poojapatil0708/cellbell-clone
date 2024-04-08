import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogIn from "../screens/auth/login";
import Navbar from "../componants/navbar";
import Register from "../screens/auth/register";

const IndexRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="*" element={<Navigate to="/auth/login" />} />
                    <Route path="/auth/login" element={<LogIn />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default IndexRouter;