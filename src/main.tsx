import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/about.tsx";
import Booklist from "./components/Booklist/booklist.tsx";
import Bookdetails from "./components/Bookdetails/bookdetails.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
