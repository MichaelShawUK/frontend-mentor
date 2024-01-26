import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonial">
        <p className="review">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="author">
          <img src={profile1} />
          <p className="name">Satish Patel</p>
          <p className="status">Founder & CEO, Huddle</p>
        </div>
      </article>
      <article className="testimonial">
        <p className="review">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="author">
          <img src={profile2} />
          <p className="name">Bruce McKenzie</p>
          <p className="status">Founder & CEO, Huddle</p>
        </div>
      </article>
      <article className="testimonial">
        <p className="review">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="author">
          <img src={profile3} />
          <p className="name">Iva Boyd</p>
          <p className="status">Founder & CEO, Huddle</p>
        </div>
      </article>
    </section>
  );
}

export default Testimonials;
