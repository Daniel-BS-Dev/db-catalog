import { AuthContext, AuthContextData } from 'AuthContext';
import { useState } from 'react';
import Route from './Route';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



const App = () => {
  // criando um estado global
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    isAuthenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Route />
    </AuthContext.Provider>
  );
};

export default App;
