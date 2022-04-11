import Navbar from "./Navbar";
import { link } from 'react-router-dom'

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="main">
          <h1 className="title">Hello World</h1>
          <p>
            My very first website. I hope to make something interesting,
            accessible, and exciting
          </p>
          <p>lorem</p>
        </div>
        <div className="main">
          <h1 className="title">What a journey</h1>
          <p>I can't believe that this has finally come to the point it has</p>
        </div>
        <div className="main">
          <h1 className="title">What a journey</h1>
          <p>I can't believe that this has finally come to the point it has</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
