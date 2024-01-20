import "./styles/css/index.css";

import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Main from "./components/Main";

function HuddleAlternating() {
  return (
    <div className="huddle-alternating">
      <div className="header-wrapper">
        <Header />
        <CallToAction />
      </div>
      <Main />
      {/* <img src="src/projects/junior/huddle-landing-page-with-alternating-feature-blocks-master/design/desktop-design.jpg" /> */}
    </div>
  );
}

export default HuddleAlternating;
