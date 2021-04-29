import React, { useState } from 'react';
import{useHistory} from 'react-router-dom';
import axios from 'axios';




export default function SigninScreen(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history=useHistory();
    


    async function handleLogin(e) {
        e.preventDefault();

        try{
          const response = await axios.post('/api/users/signin',{email,password});
            alert(`Deu certo! ${response.data.name}`)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nome',response.data.name);
                       
            history.push('/home')
            
        } catch (err) { 
            alert(`Não foi possível realizar o Login ${err.message}`);

        }

    }

  return (
    <div>
      <form className="form" onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Login
          </button>
        </div>
       
      </form>
    </div>
  );
}
