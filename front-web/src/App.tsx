import { AuthContext, AuthContextData } from 'AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Route from './Route';
import './App.css';



const App = () => {
  // criando um estado global
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Route />
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default App;
