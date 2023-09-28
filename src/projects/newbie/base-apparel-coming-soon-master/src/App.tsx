import "./styles/css/index.css";
import logo from "./assets/images/logo.svg";
import desktopHero from "./assets/images/hero-desktop.jpg";
import mobileHero from "./assets/images/hero-mobile.jpg";
import arrowIcon from "./assets/images/icon-arrow.svg";
import errorIcon from "./assets/images/icon-error.svg";
import useViewMode from "./hooks/useViewMode";

function submitHandler(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const input = form[0] as HTMLInputElement;
  const emailInput = input.value;

  const emailRegex = new RegExp(/\w+[@]\w+[.]\w+/);
  const isValidEmail = emailRegex.test(emailInput);

  if (!isValidEmail) form.classList.add("error");
  else form.classList.remove("error");
}

function App() {
  const viewMode = useViewMode();
  const hero = viewMode === "MOBILE" ? mobileHero : desktopHero;

  return (
    <div className="container">
      <div className="app">
        <header>
          <img src={logo}></img>
        </header>
        <div className="hero">
          <img src={hero}></img>
        </div>
        <main>
          <h1>
            <span className="regular">WE'RE</span>
            <br></br>
            <span className="dark">COMING</span>
            <br></br>
            <span className="dark">SOON</span>
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form onSubmit={submitHandler}>
            <input name="email" type="text" placeholder="Email Address"></input>
            <img className="error-icon" src={errorIcon}></img>
            <button>
              <img src={arrowIcon}></img>
            </button>
            <p className="error-message">Please provide a valid email</p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
