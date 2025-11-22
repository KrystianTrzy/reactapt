import React, { useContext } from "react";
import { themecontext } from "../context/themecontext";

const ThemeToggleButton = () => {
  const { tootgletheme } = useContext(themecontext);
  return (
    <button onClick={tootgletheme} style={{ marginBottom: 12 }}>
      Zmień motyw
    </button>
  );
};

export default ThemeToggleButton;