import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Posts from "./components/Posts";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/todos" component={Todos} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
