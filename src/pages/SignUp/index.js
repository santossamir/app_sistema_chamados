import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function SignUp() {
  const [nome, setNome] = useState('');
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
            <h1>Cadastrar Conta</h1>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='******' value={password} onChange={(e) => setPassworld(e.target.value)} />
            <button type="submit">Cadastrar</button>
          </form>
          <Link to="/">Já tem uma conta? Clique aqui.</Link>
        </div>
      </div>
    );
  }
  
  