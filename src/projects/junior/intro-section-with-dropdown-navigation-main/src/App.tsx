import "./styles/css/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import useViewMode from "./hooks/useViewMode";

function SnapPage() {
  const viewMode = useViewMode();
  console.log(viewMode);
  return (
    <div className="snap-page">
      <Header />
      <Main />
    </div>
  );
}

export default SnapPage;
