import { TestimonialType } from "../data/testimonials";

function Testimonial({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className={`testimonial ${testimonial.card}`}>
      <img src={testimonial.avatar} />
      <p className="name">{testimonial.name}</p>
      <p className="status">{testimonial.status}</p>
      <h3 className="headline">{testimonial.headline}</h3>
      <p className="review">{testimonial.review}</p>
    </div>
  );
}

export default Testimonial;
