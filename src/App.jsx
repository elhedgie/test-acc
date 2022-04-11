import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
