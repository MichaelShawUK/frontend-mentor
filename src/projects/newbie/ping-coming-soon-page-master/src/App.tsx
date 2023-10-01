import "./styles/css/index.css";
import logo from "./assets/images/logo.svg";
import dashboard from "./assets/images/illustration-dashboard.png";
import FacebookSvg from "./components/FacebookSvg";
import TwitterSvg from "./components/TwitterSvg";
import InstagramSvg from "./components/InstagramSvg";
import { useState } from "react";

function App() {
  const [formError, setFormError] = useState(false);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form[0] as HTMLInputElement;

    const emailRegex = new RegExp(/\w+[@]\w+[.]\w+/g);
    const isValidEmail = emailRegex.test(input.value);
    setFormError(!isValidEmail);
  }

  const formClass = formError ? "error" : "";

  return (
    <div className="app">
      <header>
        <img src={logo} />
      </header>
      <main>
        <h1>
          We are launching <span className="bold">soon!</span>
        </h1>
        <p>Subscribe and get notified</p>
        <div className="container">
          <form onSubmit={submitHandler} className={formClass}>
            <input type="text" placeholder="Your email address..." />
            <button>Notify Me</button>
            <p className="error-message">
              Please provide a valid email address
            </p>
          </form>
        </div>
        <img src={dashboard} className="dashboard" />
      </main>
      <footer>
        <ul className="social-media">
          <li className="social-icon">
            <FacebookSvg />
          </li>
          <li className="social-icon">
            <TwitterSvg />
          </li>
          <li className="social-icon">
            <InstagramSvg />
          </li>
        </ul>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
