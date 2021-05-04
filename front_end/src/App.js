import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthHomePage from "./pages/AuthHomePage";
import { useState } from 'react';
import HomePage from "./pages/HomePage";

function App() {
  const [token, setToken] = useState();
  const invalidateToken = () => {
    setToken(false)
  }
  return (
    <Router>
      
      <Route path="/"/>
      {!token ? 
      <HomePage
      setToken = { setToken }
      /> : 
      <AuthHomePage
      invalidateToken = { invalidateToken }
      />}
    </Router>

   
  );
}

export default App;
