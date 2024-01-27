import { useState } from "react";

function CallToAction() {
  const [isFormValid, setIsFormValid] = useState<boolean | undefined>();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    setIsFormValid(true);
  }

  function invalidHandler() {
    setIsFormValid(false);
  }

  return (
    <section className="call-to-action">
      <div className="wrapper">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extermely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form onSubmit={submitHandler} onInvalid={invalidHandler}>
          <input type="email" name="email" id="email" />
          <button>Get Started For Free</button>
          {isFormValid === false && (
            <p className="error">Please enter a valid email address</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default CallToAction;
