import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomCursor from './components/ReusableComponents/CustomCursor/CustomCursor';
import Layout from './components/Pages/Layout/Layout';

function App() {
  return (
    <>
      <div className="container">
        <CustomCursor />
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
