import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom"; // Route removed for better debugging
import HomePage from "./pages/HomePage";

function App() {
  const [token, setToken] = useState();
  return (
    <Router>
      <HomePage
      setToken = { setToken }
      />
    </Router>

   
  );
}

export default App;
