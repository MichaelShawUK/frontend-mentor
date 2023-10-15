import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

function SignUp() {
  return (
    <div className="container">
      <article className="app">
        <section className="sign-up">
          <h1>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input type="text" id="email" placeholder="email@company.com" />
            </div>
            <button>Subscribe to monthly newsletter</button>
          </form>
        </section>
        <section className="illustration">
          <img className="desktop" src={illustrationDesktop} />
          <img className="mobile" src={illustrationMobile} />
        </section>
      </article>
    </div>
  );
}

export default SignUp;
