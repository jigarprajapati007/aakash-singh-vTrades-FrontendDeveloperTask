import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./pages/authentication/login";
import ForgetPassword from "./pages/authentication/forget-password";
import Register from "./pages/authentication/registration";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/forget-pass" element={<ForgetPassword />}/>
      <Route path="/signup" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
