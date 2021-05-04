import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom"; // Route removed for better debugging
import HomePage from "./pages/HomePage";

function App() {
  const [token, setToken] = useState();
  return (
    <Router>
      {!token ? 
      <HomePage
      setToken = { setToken }
      /> : console.log("You have a token")}
    </Router>

   
  );
}

export default App;
