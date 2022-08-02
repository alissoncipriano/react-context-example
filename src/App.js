import React, { useContext } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { AuthContext } from './providers/auth';

function App() {
  const { user } = useContext(AuthContext);

  if (user.name)
    return (
      <div className="App">
        <Profile />
      </div>
    );

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
