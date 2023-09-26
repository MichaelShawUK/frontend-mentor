import "./styles/css/index.css";
import StarRating from "./components/StarRating";
import Review from "./components/Review";
import reviews from "./data/reviews.json";

function App() {
  return (
    <div className="container">
      <article className="app">
        <section className="summary">
          <h2>10,000+ of our users love our products.</h2>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </section>
        <section className="ratings">
          <StarRating category="Reviews" stars={5} />
          <StarRating category="Report Guru" stars={5} />
          <StarRating category="BestTech" stars={5} />
        </section>
        <section className="reviews">
          {reviews.map((review) => (
            <Review key={review.id} data={review} />
          ))}
        </section>
      </article>
    </div>
  );
}

export default App;
