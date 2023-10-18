import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import { useState } from "react";

function SignUp({ onSubscribe }: { onSubscribe: () => void }) {
  const [error, setError] = useState<string | null>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailField = form[0] as HTMLInputElement;
    const enteredEmail = emailField.value;

    const emailRegex = new RegExp(/\w+[@]\w+[.]\w+/);

    if (enteredEmail.trim().length === 0) {
      setError("Enter email address");
    } else if (!emailRegex.test(enteredEmail)) {
      setError("Valid email required");
    } else {
      setError(null);
      onSubscribe();
    }
  }

  const inputClassName = error ? "input-error" : "";

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
          <form onSubmit={submitHandler}>
            <div className="field">
              <div className="label-container">
                <label htmlFor="email">Email address</label>
                <span className="error-message">{error}</span>
              </div>
              <input
                type="text"
                id="email"
                placeholder="email@company.com"
                className={inputClassName}
              />
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
