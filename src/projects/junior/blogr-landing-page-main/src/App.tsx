import "./styles/css/index.css";

import Nav from "./components/Nav";

import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <div className={`blogr ${device}`}>
      {/* <Nav /> */}
      <h2>HEADER</h2>
      <header>
        <Nav />
      </header>
      <h2>FOOTER</h2>
      <footer>
        <Nav />
      </footer>
      <h1>BLOGR</h1>
    </div>
  );
}

export default Blogr;
