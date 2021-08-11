import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import BuildBody from './components/BuildBody';
import BuildFrame from './components/BuildFrame';
import FitTyres from './components/FitTyres';
import TestCar from './components/TestCar';
import { data } from './apiData';


const App = () => {
  return (
    <Router>
      <div className="main">
        <h1>{data.projetcName}</h1>
          <Switch>
            <Route path="/" exact>
            <h1>Start Making a Car By Building Frame</h1>
              <BuildFrame />
            </Route>
            <Route path="/buildbody" exact>
              <BuildBody />
          </Route>
          <Route path="/fittyres" exact>
              <FitTyres />
          </Route>
          <Route path="/testcar" exact>
              <TestCar />
          </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
