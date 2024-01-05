import "./styles/css/index.css";

import Header from "./components/Header";
import Accounts from "./components/Accounts";

import { useState } from "react";

function SocialMediaDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((previous) => !previous);

  return (
    <div className={`social-media-dashboard ${isDarkMode ? "dark" : "light"}`}>
      <Header onToggle={toggleTheme} isDarkMode={isDarkMode} />
      <Accounts />
    </div>
  );
}

export default SocialMediaDashboard;
