import illustration from "../assets/images/illustration-intro.png";

function Introduction() {
  return (
    <section className="introduction">
      <img src={illustration} className="illustration" />
      <div className="wrapper">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Introduction;
