import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/Signup";
import Contact from "./components/pages/SignIn";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
