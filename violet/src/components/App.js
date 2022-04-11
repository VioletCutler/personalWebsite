import Navbar from "./NavBar/Navbar";
import HomePage from "./HomePage";
import About from "./About"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={ <HomePage/>} />
            <Route exact path='/about' element={ <About/>} />
          </Routes>
        </main>

        <div></div>
      </div>
    </Router>
  );
}

export default App;
