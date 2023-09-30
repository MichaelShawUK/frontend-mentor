import "./styles/css/index.css";

function App() {
  return (
    <div className="container">
      <article className="app">
        <section className="summary">
          <h2>Join our community</h2>
          <h4>30-day, hassle-free money back guarantee</h4>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>
        <section className="subscription">
          <h4>Monthly Subscription</h4>
          <p className="price">
            <span className="amount">$29</span> per month
          </p>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </section>
        <section className="services">
          <h4>Why Us</h4>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default App;
