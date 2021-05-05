import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
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
      <Switch>
        <Route path="/browse-journal">
        <h1>Hello World</h1>
        </Route>

        <Route path="/browse-moments">
        <h1>Hello World</h1>
        </Route>
        <Route path="/">
        {!token ? 
        <HomePage
        setToken = { setToken }
        /> : 
        <AuthHomePage
        invalidateToken = { invalidateToken }
        />}
        </Route>
      </Switch>

    </Router>

   
  );
}

export default App;
