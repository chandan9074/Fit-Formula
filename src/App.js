// import pakages
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';

// import files
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
