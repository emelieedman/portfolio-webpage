import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <StartPage />}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
