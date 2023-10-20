import arrowIcon from "./assets/images/icon-arrow.svg";
import "./styles/css/index.css";
import InputField from "./components/InputField";
import useAgeCalculator from "./hooks/useAgeCalculator";

function AgeCalculator() {
  const { age, error, checkUserInput } = useAgeCalculator();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const userInput = {
      day: (form[0] as HTMLInputElement).value,
      month: (form[1] as HTMLInputElement).value,
      year: (form[2] as HTMLInputElement).value,
    };

    checkUserInput(userInput);
  }

  return (
    <div className="container">
      <article className="age-calculator">
        <form onSubmit={submitHandler}>
          <div className="fields">
            <InputField label="day" placeholder="DD" error={error.day} />
            <InputField label="month" placeholder="MM" error={error.month} />
            <InputField label="year" placeholder="YYYY" error={error.year} />
          </div>
          <div className="actions">
            <button>
              <img src={arrowIcon} />
            </button>
          </div>
        </form>
        <section className="results">
          <p>
            <span>{age.years}</span> years
          </p>
          <p>
            <span>{age.months}</span> months
          </p>
          <p>
            <span>{age.days}</span> days
          </p>
        </section>
      </article>
    </div>
  );
}

export default AgeCalculator;
