import Testimonial from "./Testimonial";
import testimonials from "../data/testimonials";
import ViewMode from "../context/ViewMode";
import { useContext } from "react";

function Testimonials() {
  const viewMode = useContext(ViewMode).toLowerCase();

  return (
    <div className={`testimonials ${viewMode}`}>
      <h2>CLIENT TESTIMONIALS</h2>
      <div className="flex-wrapper">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            title={testimonial.title}
            comment={testimonial.comment}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
