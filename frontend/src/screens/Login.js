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
    <div className='login'>
        <div class="login-box">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div class="user-box">
                  <input type="text"  
                  required
                  onChange={(e) => setEmail(e.target.value)}/>
                  <label>Email</label>
                </div>
                <div class="user-box">
                  <input type="password" 
                  required
                  onChange={(e) => setPassword(e.target.value)}/>
                  <label>Senha</label>
                </div>
                <button type='submit'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Entrar
                </button>
              </form>
            </div>
    </div>
  );
}
