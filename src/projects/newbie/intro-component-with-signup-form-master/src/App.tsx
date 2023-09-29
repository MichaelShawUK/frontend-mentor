import "./styles/css/index.css";
import FormField from "../../base-apparel-coming-soon-master/src/components/FormField";
import { useState } from "react";

function isEmpty(input: string) {
  return input.trim().length === 0;
}

function isValidEmail(emailInput: string) {
  const emailRegex = new RegExp(/\w+[@]\w+[.]\w+/g);
  return emailRegex.test(emailInput);
}

interface Error {
  [key: string]: string;
}

function App() {
  const [errors, setErrors] = useState<Error>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const [firstName, lastName, email, password] = form;
    const inputs = {
      firstName: {
        value: (firstName as HTMLInputElement).value,
        name: "First Name",
      },
      lastName: {
        value: (lastName as HTMLInputElement).value,
        name: "Last Name",
      },
      email: {
        value: (email as HTMLInputElement).value,
        name: "Email",
      },
      password: {
        value: (password as HTMLInputElement).value,
        name: "Password",
      },
    };

    for (const [key, input] of Object.entries(inputs)) {
      if (isEmpty(input.value)) {
        setErrors((error) => {
          const newErrorState = { ...error };
          newErrorState[key] = `${input.name} cannot be empty`;
          return newErrorState;
        });
      } else {
        setErrors((error) => {
          const newErrorState = { ...error };
          newErrorState[key] = "";
          return newErrorState;
        });
      }
    }

    if (!isEmpty(inputs.email.value)) {
      if (!isValidEmail(inputs.email.value)) {
        setErrors((error) => {
          return { ...error, email: "Looks like this is not an email" };
        });
      } else
        setErrors((error) => {
          return { ...error, email: "" };
        });
    }
  }

  return (
    <main className="app">
      <section className="summary">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="sign-up">
        <p className="offer">
          <span className="bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </p>
        <form onSubmit={submitHandler}>
          <FormField
            placeholder="First Name"
            type="text"
            error={errors.firstName}
          />
          <FormField
            placeholder="Last Name"
            type="text"
            error={errors.lastName}
          />
          <FormField placeholder="Email" type="text" error={errors.email} />
          <FormField
            placeholder="Password"
            type="password"
            error={errors.password}
          />
          <button>CLAIM YOUR FREE TRIAL</button>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <span className="bold red">Terms and Services</span>
          </p>
        </form>
      </section>
    </main>
  );
}

export default App;
