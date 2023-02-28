import Navigation from "./components/routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Menu from "./components/routes/menu/menu.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Branches from "./components/routes/branches/branches.component";
import AboutUs from "./components/routes/about-us/about-us.component";
import Checkout from "./components/routes/checkout/checkout.component";
import "./media-query.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/branch" element={<Branches />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
