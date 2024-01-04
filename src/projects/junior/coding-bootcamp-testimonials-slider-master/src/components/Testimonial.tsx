import { TestimonialType } from "../data/testimonials";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-prev.svg";

interface Props {
  testimonial: TestimonialType;
  onPrev: () => void;
  onNext: () => void;
  isMin: boolean;
  isMax: boolean;
}

function Testimonial({ testimonial, onPrev, onNext, isMin, isMax }: Props) {
  return (
    <div className="testimonial">
      <div className="image-container">
        <img src={testimonial.image} className="avatar" />
        <div className="buttons">
          <button onClick={onPrev} className="prev" disabled={isMin}>
            <img src={prev} />
          </button>
          <button onClick={onNext} className="next" disabled={isMax}>
            <img src={next} />
          </button>
        </div>
      </div>
      <div className="text-container">
        <p className="comment">
          <i>"</i> {testimonial.comment} <i>"</i>
        </p>
        <p className="name">{testimonial.name}</p>
        <p className="position">{testimonial.position}</p>
      </div>
    </div>
  );
}

export default Testimonial;
