import React, { useContext } from "react";
import { themeContext } from "../App";

function HelperBtn() {
  let { dark, setDark } = useContext(themeContext);

  function changeButton() {
    return setDark((prevValue) => !prevValue);
  }

  return (
    <button className="darkAndLightMode" onClick={changeButton}>
      {dark ? "Dark" : "Light"}
    </button>
  );
}

export default HelperBtn;
