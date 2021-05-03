import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthHomePage from "./pages/AuthHomePage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      
      <Route path="/" component={HomePage} />
      {/* <Route path="/" component={AuthHomePage} /> */}
      
    </Router>

   
  );
}

export default App;
