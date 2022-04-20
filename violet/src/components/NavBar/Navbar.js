import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../../index.css'

function Navbar() {
  const navigation = useNavigate();

  useEffect(() => {
    const selectedCSSProps = Array.from(document.styleSheets)
  })
  
  function mouseEnterHandler(event) {
    // event.target.style.color = "#EE6A1F";
  }

  function mouseLeaveHandler(event) {
    if (event.target.id === "violet") {
      // event.target.style.color = "#FF9AEC";
    } else {
      // event.target.style.color = "white";
    }
  }

  return (
      <nav>
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
  );
}

export default Navbar;
