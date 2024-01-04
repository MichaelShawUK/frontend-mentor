import "./styles/css/index.css";
import logo from "./assets/images/logo.svg";
import document from "./assets/images/icon-document.svg";
import folder from "./assets/images/icon-folder.svg";
import upload from "./assets/images/icon-upload.svg";

function Fylo() {
  return (
    <div className="fylo">
      <div className="explorer">
        <img src={logo} className="logo" />
        <div className="icons">
          <div className="icon">
            <img src={document} />
          </div>
          <div className="icon">
            <img src={folder} />
          </div>
          <div className="icon">
            <img src={upload} />
          </div>
        </div>
      </div>
      <div className="storage">
        <p>
          You've used <span className="bold">815 GB</span> of your storage
        </p>
      </div>
    </div>
  );
}

export default Fylo;
