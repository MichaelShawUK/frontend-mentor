import Testimonial from "./Testimonial";
import testimonials from "../data/testimonials";
import ViewMode from "../context/ViewMode";
import { useContext } from "react";

function Testimonials() {
  const viewMode = useContext(ViewMode).toLowerCase();

  return (
    <div className={`testimonials ${viewMode}`}>
      <h2>CLIENT TESTIMONIALS</h2>
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          title={testimonial.title}
          comment={testimonial.comment}
          avatar={testimonial.avatar}
        />
      ))}
      {/* <Testimonial
        name={testimonials[0].name}
        title={testimonials[0].title}
        comment={testimonials[0].comment}
        avatar={testimonials[0].avatar}
      /> */}
    </div>
  );
}

export default Testimonials;
