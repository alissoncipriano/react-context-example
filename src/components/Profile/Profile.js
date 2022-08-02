import React from 'react'
import { useAuth } from '../../providers/auth';
import "./Profile.css";

export default function Profile() {
  const { user, setUser } = useAuth();
  
  const handleLogout = () => {
    setUser({name: '', password: ''});
    localStorage.removeItem("user");
  }

  return (
    <div className='Profile'>
      <h1>Olá, { user.name }!</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}
