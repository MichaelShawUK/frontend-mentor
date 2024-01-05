import { useRef } from "react";

function Header({ onToggle }: { onToggle: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function setCheckbox() {
    if (inputRef.current) {
      inputRef.current.checked = !inputRef.current.checked;
      onToggle();
    }
  }

  return (
    <header>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <hr />
      <div className="toggle">
        <label htmlFor="theme">Dark Mode</label>
        <input type="checkbox" id="theme" onChange={onToggle} ref={inputRef} />
        <div className="switch" onClick={setCheckbox}></div>
      </div>
    </header>
  );
}

export default Header;
