import arrowIcon from "./assets/images/icon-arrow.svg";
import "./styles/css/index.css";
import InputField from "./components/InputField";

function AgeCalculator() {
  return (
    <div className="container">
      <article className="age-calculator">
        <form>
          <div className="fields">
            <InputField
              label="day"
              placeholder="DD"
              error="Must be a valid month"
            />
            <InputField label="month" placeholder="MM" error="" />
            <InputField
              label="year"
              placeholder="YYYY"
              error="This field is required"
            />
          </div>
          <div className="actions">
            <button>
              <img src={arrowIcon} />
            </button>
          </div>
        </form>
        <section className="results">
          <p>
            <span>--</span> years
          </p>
          <p>
            <span>10</span> months
          </p>
          <p>
            <span>--</span> days
          </p>
        </section>
      </article>
    </div>
  );
}

export default AgeCalculator;
