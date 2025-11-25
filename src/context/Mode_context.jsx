import { createContext, useState } from "react";

const ModeContext = createContext({
  isDarkMode: false,
  handleDakMode: () => {},
});

export const ModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ModeContext.Provider
      value={{ isDarkMode, handleDarkMode }}
    >
        {props.children}
    </ModeContext.Provider>
  );
};
export default ModeContext;