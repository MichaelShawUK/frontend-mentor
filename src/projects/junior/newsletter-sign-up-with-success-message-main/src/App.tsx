import "./styles/css/index.css";
import SignUp from "./components/SignUp";
import Success from "./components/Success";

import { useState } from "react";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubscribe = () => setIsSubscribed(true);
  const resetSubscription = () => setIsSubscribed(false);

  return isSubscribed ? (
    <Success resetSubscription={resetSubscription} />
  ) : (
    <SignUp onSubscribe={onSubscribe} />
  );
}

export default App;
