import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInForm from "./components/SignIn";
import SignupForm from "./components/SignUp";
import { Home } from "./pages/home";
import CartPage from "./pages/cart";
import AboutPage from "./pages/about";
import AdminPanel from "./components/Admin/AdminPanel";
import { Shop } from "./pages/shop";
import Contact from "./pages/contact";
import Userprofile from "./pages/userprofile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignupForm />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
