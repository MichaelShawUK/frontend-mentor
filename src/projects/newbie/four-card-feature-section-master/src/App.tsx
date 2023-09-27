import "./styles/css/index.css";
import cardContent from "./data/cardContent.json";
import CardFeature from "./components/CardFeature";

function App() {
  return (
    <div className="container">
      <article className="app">
        <div className="summary">
          <h1>Reliable, efficient delivery</h1>
          <h2>Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="cards">
          {cardContent.map((data) => (
            <CardFeature key={data.id} data={data} />
          ))}
        </div>
      </article>
    </div>
  );
}

export default App;
