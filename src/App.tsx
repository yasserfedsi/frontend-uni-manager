import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/university";
import Header from "./components/Home/Header/page";

export default function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/universities" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}
