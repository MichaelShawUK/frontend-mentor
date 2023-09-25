import "./styles/css/index.css";
import vehicleData from "./data/vehicle.json";
import PreviewCard from "./components/PreviewCard";

function App() {
  return (
    <div className="app">
      {vehicleData.map((data) => (
        <PreviewCard data={data} key={data.id} />
      ))}
    </div>
  );
}

export default App;
