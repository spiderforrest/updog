import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
import Header from "./components/Header/Header.js";
import { useUser } from "./context/UserContext.js";
import "./App.css";

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/chat" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
