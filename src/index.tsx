import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/index";
import Tabs from "./components/Tabs/index";
import Store from "./store/index";
import Main from "./components/Main/index";
import Settings from "./components/Settings/index";
import Footer from "./components/Footer/index";
import { ThemeProvider } from "./contexts/theme/index";

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (color: string) => {
    setTheme(color);
  };

  return (
    <ThemeProvider value={theme}>
      <Router>
        <div id="app" className={theme}>
          <Store>
            <React.Suspense fallback={<Loading />}>
              <main>
                <Tabs />
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route
                    exact
                    path="/settings"
                    render={() => <Settings changeTheme={changeTheme} />}
                  />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </main>
              <Footer />
            </React.Suspense>
          </Store>
        </div>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
