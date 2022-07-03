import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';
import logo from '../../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassworld] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('Clicou!');
  }

    return (
      <div className="containerCenter">
        <div className='login'>
          <div className='loginArea'>
            <img src={logo} alt="Sistema Logo"/>
          </div>
          <form onSubmit={ handleSubmit }>
            <h1>Entrar</h1>
            <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='******' value={password} onChange={(e) => setPassworld(e.target.value)} />
            <button type="submit">Acessar</button>
          </form>
          <Link to="/register">Criar uma conta</Link>
        </div>
      </div>
    );
  }
  
  
  