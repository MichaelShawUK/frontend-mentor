import mockups from "../assets/images/illustration-mockups.svg";

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="text-wrapper">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="primary">Get Started For Free</button>
      </div>
      <img src={mockups} />
    </section>
  );
}

export default CallToAction;
