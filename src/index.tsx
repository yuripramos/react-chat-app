import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/index";
import Tabs from "./components/Tabs/index";
import Store from "./store/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";

const App = () => (
  <Router>
    <div id="app">
      <Store>
        <React.Suspense fallback={<Loading />}>
          <main>
            <Tabs />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/settings" component={Main} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </main>
          <Footer />
        </React.Suspense>
      </Store>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
