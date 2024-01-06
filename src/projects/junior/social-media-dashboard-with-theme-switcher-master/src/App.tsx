import "./styles/css/index.css";

import Header from "./components/Header";
import Accounts from "./components/Accounts";
import Overview from "./components/Overview";

import { useState } from "react";

function SocialMediaDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((previous) => !previous);

  return (
    <div className={`social-media-dashboard ${isDarkMode ? "dark" : "light"}`}>
      <Header onToggle={toggleTheme} isDarkMode={isDarkMode} />
      <Accounts />
      <Overview />
    </div>
  );
}

export default SocialMediaDashboard;
