import CategoryScore from "./CategoryScore";
import categories from "../data/data.json";

function Summary() {
  return (
    <div className="summary">
      <h3>Summary</h3>
      {categories.map((category) => (
        <CategoryScore category={category} key={category.id} />
      ))}
      <button>Continue</button>
    </div>
  );
}

export default Summary;
