import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
