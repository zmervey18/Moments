import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthHomePage from "./pages/AuthHomePage";
import { useState } from 'react';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [token, setToken] = useState();
  return (
    <Router>
      
      <Route path="/"/>
      {/* <Route path="/" component={AuthHomePage} /> */}
      
      <HomePage
      setToken = { setToken }
      />
    </Router>

   
  );
}

export default App;
