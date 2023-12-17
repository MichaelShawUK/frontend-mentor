import Header from "./Header";

function CallToAction() {
  return (
    <div className="cta-wrapper">
      <Header />
      <div className="cta">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="actions">
          <button className="primary">Start for Free</button>
          <button className="secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
