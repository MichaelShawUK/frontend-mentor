import "./styles/css/index.css";
import SignUp from "./components/SignUp";
import Success from "./components/Success";

import { useState } from "react";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return isSubscribed ? <Success /> : <SignUp />;
}

export default App;
