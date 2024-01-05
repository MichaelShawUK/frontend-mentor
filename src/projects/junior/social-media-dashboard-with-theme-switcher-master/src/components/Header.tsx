interface Props {
  onToggle: () => void;
  isDarkMode: boolean;
}

function Header({ onToggle, isDarkMode }: Props) {
  return (
    <header>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <hr />
      <div className="toggle">
        <label htmlFor="theme">Dark Mode</label>
        <input type="checkbox" id="theme" checked={isDarkMode} />
        <div className="switch" onClick={onToggle}></div>
      </div>
    </header>
  );
}

export default Header;
