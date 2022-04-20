import { setTheme, setButtonTheme } from "../Theme";

function ThemeBar() {
  return (
    <div id="themeBar">
      <h1 id="chooseColorTheme">Choose a color theme</h1>
      <button
        id="themeOneBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeOne");
          setButtonTheme("neutral");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue", '#themeOneBtn');
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        1
      </button>
      <button
        id="themeTwoBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeTwo");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue");
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        2
      </button>
      <button
        id="themeThreeBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeThree");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue");
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        3
      </button>
      <button
        id="themeThreeBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeFour");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue");
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        4
      </button>
      <button
        id="themeThreeBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeFive");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue");
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        5
      </button>
    </div>
  );
}

export default ThemeBar;
