import logo from "../assets/images/logo.svg";

function Balance() {
  return (
    <div className="balance">
      <div className="summary">
        <h6>My balance</h6>
        <h3>$921.48</h3>
      </div>
      <img src={logo} className="logo" />
    </div>
  );
}

export default Balance;
