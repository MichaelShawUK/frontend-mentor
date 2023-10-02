import "./styles/css/index.css";
import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-mockups.svg";
import FacebookSvg from "./components/FacebookSvg";
import TwitterSvg from "./components/TwitterSvg";
import InstagramSvg from "./components/InstagramSvg";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} />
      </header>
      <main>
        <img src={illustration} className="illustration" />
        <section>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </section>
      </main>
      <footer>
        <ul className="social-media">
          <li>
            <FacebookSvg />
          </li>
          <li>
            <TwitterSvg />
          </li>
          <li>
            <InstagramSvg />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
