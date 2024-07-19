import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ContactForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
  