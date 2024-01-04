import "./styles/css/index.css";
import testimonials from "./data/testimonials";
import Testimonial from "./components/Testimonial";

import { useState } from "react";

function TestimonialSlider() {
  const [testimonialId, setTestimonialId] = useState(0);

  const onNext = () => {
    setTestimonialId((id) => Math.min(id + 1, testimonials.length - 1));
  };

  const onPrev = () => {
    setTestimonialId((id) => Math.max(0, id - 1));
  };

  const isMin = testimonialId === 0;
  const isMax = testimonialId == testimonials.length - 1;

  return (
    <div className="testimonial-slider">
      <Testimonial
        key={testimonials[testimonialId].id}
        testimonial={testimonials[testimonialId]}
        onPrev={onPrev}
        onNext={onNext}
        isMin={isMin}
        isMax={isMax}
      />
    </div>
  );
}

export default TestimonialSlider;
