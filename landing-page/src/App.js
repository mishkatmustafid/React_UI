import logo from "./logo.svg";
import "./App.css";
import Index from "./pages/index.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Index} />
    </Router>
  );
}

export default App;
