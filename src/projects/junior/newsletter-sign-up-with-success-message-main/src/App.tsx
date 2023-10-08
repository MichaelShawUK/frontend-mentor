import "./styles/css/index.css";
import illustration from "./assets/images/illustration-sign-up-desktop.svg"

function App() {
  return (
    <article className="app">
      <section className="sign-up">
        <h1>Stay Updated</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form >
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" placeholder="email@company.com"/>
          </div>
          <button>Subscribe to monthly newsletter</button>
        </form>
      </section>
      <section className="illustration">
        <img src={illustration} />
      </section>
    </article>
  );
}

export default App;
