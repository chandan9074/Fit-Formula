// import pakages
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';

// import files
import Homepage from './Components/Homepage/Homepage';
import Registation from './Components/Accounts/Registraion';
// import AuthPro from './context/AuthProvider';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './Components/Homepage/Service Details/ServiceDetails';
import PrivateRoute from './Components/Private route/PrivateRoute';
import Product from './Components/Product page/Poduct';
import Navigation from './Components/shared/Navbar/Navbar';
import Excercise from './Components/Excercise Page/Excercise';
import Footer from './Components/shared/Footer/Footer';
import useServices from './hooks/useServices';
import { useEffect, useState } from 'react';

function App() {

  const [ services ] = useServices();
  const [reload, setReload] = useState(false)

  // useEffect(()=>{
  //   handleReload();
  // }, [reload])
  //   const handleReload = () =>{
  //     if(reload){
  //       setReload(false);
  //     }
  //     else{
  //       setReload(true)
  //     }
  //   }

  return (
    <div className="App">
      {/* <AuthPro> */}
        <Router>
          <AuthProvider>
          {/* <Navigation /> */}
        <Switch>
          <PrivateRoute exact path="/details/:id">
            <ServiceDetails services={services}  />
          </PrivateRoute>
          <PrivateRoute exact path="/products">
            <Product />
          </PrivateRoute>
          <PrivateRoute exact path="/excercise">
            <Excercise />
          </PrivateRoute>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/accounts">
            <Registation />
          </Route>
        </Switch>
            <Footer />
      </AuthProvider>
      </Router>
      {/* </AuthPro> */}
    </div>
  );
}

export default App;
