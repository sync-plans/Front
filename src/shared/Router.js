import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import KaKaoLogin from "../pages/KaKaoLogin";
import Login from "../pages/Login";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="oauth/kakao/callback" element={<KaKaoLogin />}></Route>
        <Route path="/main/:id?" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
