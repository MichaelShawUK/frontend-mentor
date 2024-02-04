import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

function Slideshow() {
  return (
    <section className="slideshow">
      <div className="carousel">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </div>
      <div className="actions">
        <button className="previous">
          <svg
            width="35%"
            height="35%"
            viewBox="0 0 12 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="4"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button className="next">
          <svg
            width="35%"
            height="35%"
            viewBox="0 0 12 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="4"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Slideshow;
