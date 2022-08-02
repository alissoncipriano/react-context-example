import React from 'react'
import { useAuth } from '../../providers/auth';
import "./Login.css";

export default function Login() {
  const { setUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // user name and password are not nul and not empty
    if ((e.target[0].value && e.target[0].value.replace(/ /g, '').length > 0) &&
        (e.target[1].value && e.target[1].value.replace(/ /g, '').length > 0)) {
      const user = {name: e.target[0].value, password: e.target[1].value};

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    }
  }

  return (
    <div className='Login'>
      <h1>Olá!</h1>

      <h2>Faça login para prosseguir.</h2>

      <form onSubmit={(e) => handleLogin(e)}>
        <input placeholder='Usuário' name='name' type='text' />
        <input placeholder='Senha' name='password' type='password' />
        <button>Ok!</button>
      </form>
    </div>
  )
}
