import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/Pages/StartPage/StartPage';
import HomePage from './components/Pages/HomePage/HomePage';
import Layout from './components/Pages/Layout/Layout';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Layout />}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
