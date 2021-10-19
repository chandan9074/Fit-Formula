// import pakages
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';

// import files
import Homepage from './Components/Homepage/Homepage';
import Registation from './Components/Accounts/Registraion';
// import AuthPro from './context/AuthProvider';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      {/* <AuthPro> */}
        <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/registration">
            <Registation />
          </Route>
        </Switch>
      </Router>
      {/* </AuthPro> */}
      </AuthProvider>
    </div>
  );
}

export default App;
