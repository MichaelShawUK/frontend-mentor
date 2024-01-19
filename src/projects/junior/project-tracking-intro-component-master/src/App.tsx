import "./styles/css/index.css";
import illustration from "./assets/images/illustration-devices.svg";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";

import { useState } from "react";

function ProjectTracking() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="project-tracking">
      <Header
        isMenuOpen={isMobileMenuOpen}
        openMenu={openMobileMenu}
        closeMenu={closeMobileMenu}
      />
      <MobileMenu isOpen={isMobileMenuOpen} />
      <main>
        <img src={illustration} className="illustration" />
        <div className="text">
          <h3>
            <span>NEW</span>MONOGRAPH DASHBOARD
          </h3>
          <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <p>
            Project planning and time tracking
            <br /> for agile teams
          </p>
          <button>SCHEDULE A DEMO</button>
          <span>TO SEE A PREVIEW</span>
        </div>
      </main>
    </div>
  );
}

export default ProjectTracking;
