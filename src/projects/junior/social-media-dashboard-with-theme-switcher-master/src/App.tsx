import "./styles/css/index.css";

import Header from "./components/Header";

import { useState } from "react";

function SocialMediaDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((previous) => !previous);

  return (
    <div className={`social-media-dashboard ${isDarkMode ? "dark" : "light"}`}>
      <Header onToggle={toggleTheme} />
    </div>
  );
}

export default SocialMediaDashboard;
