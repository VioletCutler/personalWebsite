import Navbar from "./NavBar/Navbar";
import ThemeBar from "./NavBar/ThemeBar";
import HomePage from "./HomePage";
import About from "./About"
import CSSSandbox from "./CSSSandbox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navbar />
   
        <main className="main">
          <Routes>
            <Route exact path="/" element={ <HomePage/>} />
            <Route exact path='/about' element={ <About/>} />
            <Route exact path='/CSS' element={ <CSSSandbox/>} />
          </Routes>
        </main>
        <ThemeBar />
        <div></div>
      </div>
    </Router>
  );
}

export default App;
