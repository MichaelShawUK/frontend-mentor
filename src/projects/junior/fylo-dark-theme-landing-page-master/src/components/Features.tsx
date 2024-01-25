import access from "../assets/images/icon-access-anywhere.svg";
import security from "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import store from "../assets/images/icon-any-file.svg";

function Features() {
  return (
    <ul className="features">
      <li>
        <img src={access} />
        <h3>Access your files, anywhere</h3>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </li>
      <li>
        <img src={security} />
        <h3>Security you can trust</h3>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </li>
      <li>
        <img src={collaboration} />
        <h3>Real-time collaboration</h3>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </li>
      <li>
        <img src={store} />
        <h3>Store any type of file</h3>
        <p>
          Whether you're sharing holiday photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </li>
    </ul>
  );
}

export default Features;
