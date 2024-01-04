import tanya from "../assets/images/image-tanya.jpg";
import john from "../assets/images/image-john.jpg";

export interface TestimonialType {
  id: number;
  name: string;
  position: string;
  comment: string;
  image: string;
}

const testimonials = [
  {
    id: 1,
    name: "Tanya Sinclair",
    position: "UX Engineer",
    comment:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    image: tanya,
  },
  {
    id: 2,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    comment:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    image: john,
  },
];

export default testimonials;
