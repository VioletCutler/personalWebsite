import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../../index.css'

function Navbar() {
  const navigation = useNavigate();

  useEffect(() => {
    const selectedCSSProps = Array.from(document.styleSheets)
    console.log('selectedCSSProps', selectedCSSProps)
    console.log('document.',document.documentElement.style)
  })
  
  function mouseEnterHandler(event) {
    event.target.style.color = "#EE6A1F";
  }

  function mouseLeaveHandler(event) {
    if (event.target.id === "violet") {
      event.target.style.color = "#FF9AEC";
    } else {
      event.target.style.color = "white";
    }
  }

  return (
    <div>
      <nav id="nav">
        <h3
          id="violet"
          style={{cursor: 'pointer'}}
          onClick={() => {
            navigation("/");
          }}
          onMouseEnter={(event) => {
            mouseEnterHandler(event);
          }}
          onMouseLeave={(event) => {
            mouseLeaveHandler(event);
          }}
        >
          VIOLET CUTLER
        </h3>
        <h3
          className="navText"
          onClick={() => {
            navigation("/about");
          }}
          onMouseEnter={(event) => {
            mouseEnterHandler(event);
          }}
          onMouseLeave={(event) => {
            mouseLeaveHandler(event);
          }}
        >
          ABOUT
        </h3>
        <h3
          className="navText"
          onClick={() => {
            navigation('/CSS')
          }}
          onMouseEnter={(event) => {
            mouseEnterHandler(event);
          }}
          onMouseLeave={(event) => {
            mouseLeaveHandler(event);
          }}
        >
          CSS SANDBOX
        </h3>
        <h3
          className="navText"
          onMouseEnter={(event) => {
            mouseEnterHandler(event);
          }}
          onMouseLeave={(event) => {
            mouseLeaveHandler(event);
          }}
        >
          VIDEOS
        </h3>
      </nav>
    </div>
  );
}

export default Navbar;
