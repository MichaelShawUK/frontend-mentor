import "./styles/css/index.css";
import testimonials from "./data/testimonials";
import Testimonial from "./components/Testimonial";

function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default Testimonials;
