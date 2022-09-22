import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useTheme } from "../../context/ThemeContext";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

// You want to display a different image based on the themeName state that is passed in ThemeContext Provider's value object. If themeName is "day", then dayImage should be displayed. If the themeName is "night", nightImage should be displayed.
// To use the ThemeContext value in this component, use the useTheme hook from src/context/ThemeContext.js to bring in the themeName and setThemeName properties and use them in the component.
// Inside ThemeProvider in the ThemeContext.js file, you can manually change the default state. Check to see that the proper image displays when themeName is set to 'day' and when it is set to 'night'. (Remember to reload the page after changing the default.)
function Greenhouse() {
  const { themeName } = useTheme();

  return (
    <section>
      <img
        className="greenhouse-img"
        src={themeName === "day" ? dayImage : nightImage}
        alt="greenhouse"
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
