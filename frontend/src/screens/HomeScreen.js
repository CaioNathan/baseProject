import React from 'react';
import{Link, useHistory} from 'react-router-dom';

export default function HomeScreen(){

    const history=useHistory();
    const token = localStorage.getItem('token');

    if(!token){
        history.push('/')
        alert('Não possui autorização para acessar essa rota')
    }

    const nome = localStorage.getItem('nome')

  

    return(
        <div>
              <p> Bem vindo {nome}</p>
            <div className='flex'> 

            <Link to='/cadastro'>  <i class="fa fa-address-book-o" aria-hidden="true">  </i>    </Link>
              
           <Link to='/consulta'> <i class="fa fa-search-plus" aria-hidden="true"></i>   </Link>
 
            </div>




        </div>
    );
}