import { setTheme, setButtonTheme } from "../Theme"

function ThemeBar() {

    return (
        <div id='themeBar'>
            <h1 id="chooseColorTheme">Choose a color theme</h1>
        <button id='themeOneBtn' className="themeButtons" onClick={() => {
            setTheme('ThemeOne')
            setButtonTheme('neutral')
        }}>1</button>
            <button id='themeTwoBtn' className="themeButtons" onClick={() => {
            setTheme('ThemeTwo')
        }}>2</button>
            <button id='themeThreeBtn' className="themeButtons" onClick={() => {
            setTheme('ThemeThree')
        }}>3</button>
        </div>
    )
}

export default ThemeBar