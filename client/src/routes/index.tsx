import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../screens/auth/login";
import Navbar from "../componants/navbar";

const IndexRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/" element={<LogIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default IndexRouter;