import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import RivialLogo from "./assets/newLogo.png";
import { CustomReactHook } from "./components/CustomReactHook";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <img src={RivialLogo} alt="Rivial Data Security Logo" />
        <ul>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/find-bugs-1">Find Bug, Problem 1</Link>
          </li>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/find-bugs-2">Find Bug, Problem 2</Link>
          </li>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/find-bugs-3">Find Bug, Problem 3</Link>
          </li>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/custom-react-hook">Use a custom hook</Link>
          </li>
          <li style={{ display: "inline", margin: "1em" }}>
            <Link to="/api-call">Perform an API call</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/find-bugs-1">
            <FindBugOne />
          </Route>
          <Route path="/find-bugs-2">
            <FindBugTwo />
          </Route>
          <Route path="/find-bugs-3">
            <FindBugThree />
          </Route>
          <Route path="/custom-react-hook">
            <CustomReactHook />
          </Route>
          <Route path="/api-call">
            <ApiCall />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Welcome to Rivial Data Security Interview Sandbox</h2>
      <h4>Interview Application Instructions</h4>
      <div style={{ textAlign: "left" }}>
        <p>
          1. In the Github Projects tab, there are a mix of User Stories, Bugs,
          and Development Tasks (dev-stories).
        </p>
        <p>
          2. For each of the cards, please complete the requirements to the best
          of your abilities.
        </p>
        <p>3. Submit any changes as a Pull Request to the Master branch.</p>

        <p>
          Note: Do not hesitate to ask for clarification in the comments of a
          particular card
        </p>
        <p>Good luck!</p>
      </div>
    </div>
  );
};

const FindBugOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById("count").addEventListener("click", countClick);
  });

  const countClick = () => {
    document.title = `You clicked ${count} times`;
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button id="count">Click me</button>
    </div>
  );
};

const FindBugTwo = () => {
  const [name, setName] = useState(null);

  return (
    <div>
      <h1>Your name is {name}</h1>
      <input type="text" onChange={setName(name)} />
    </div>
  );
};

const FindBugThree = () => {
  const greet = (person) =>
    person.name === "Jacob" ? "hey Jacob" : "hey Anatoli";

  return (
    <div>
      Look at the code! What's the problem?
      <br />
      <button onClick={() => console.log(greet({ name: "Jacob" }))}>
        Click me!
      </button>
    </div>
  );
};

const ApiCall = () => {
  return (
    <div>
      <h4>You should have a button which on press should display a joke</h4>
      <p>You can use npm packages</p>
    </div>
  );
};
