import "./styles/css/index.css";
import avatar from "./assets/images/image-victor.jpg";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img className="avatar" src={avatar}></img>
      </div>
      <div className="details">
        <span className="name">Victor Crest</span>
        <span className="age">26</span>
        <p className="location">London</p>
      </div>
      <div className="stats">
        <div className="stat">
          <h3>80K</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>803K</h3>
          <p>Likes</p>
        </div>
        <div className="stat">
          <h3>1.4K</h3>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}

export default App;
