import "./styles/css/index.css";
import DropdownMenu from "./components/DropdownMenu";

function DropdownNav() {
  return (
    <div className="dropdown-nav">
      <DropdownMenu />

      <p>Content</p>
      <p>More Content</p>
    </div>
  );
}

export default DropdownNav;
