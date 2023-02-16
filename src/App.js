import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header/Header.js';
import { useUser } from './context/UserContext.js';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import ChatPage from './components/ChatPage/ChatPage.js';
import About from './components/About/About.js';

function App() {
  const { user } = useUser();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/auth/:type" component={Auth} />
          <Route path="/home" component={ChatPage} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Auth}>
            <>
              {user && <Redirect to="/chat" />}
              {!user && <Redirect to="/auth/sign-in" />}
            </>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
