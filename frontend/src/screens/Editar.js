import axios from 'axios';
import React,{useEffect,useState} from 'react';
import{useHistory} from 'react-router-dom';



export default function Editar(props){

    
    

    const [atendimento,setAtendimento]=useState([]);
    
    
    const history=useHistory();

    
    const token = localStorage.getItem('token');
    

    if(!token){
        alert('Não possui autorização para acessar essa rota')
        history.push('/login')}
 
  
    useEffect(()=>{
        
        let mounted=true;
         axios.get(`/api/atend/${props.match.params.id}`,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        }).then(response =>{
            if(mounted){
            setAtendimento(response.data);
           

        }})

    
        return()=> mounted = false;
        

    },[token,props.match.params.id]);

   

   
   
   


   
    return(
        <div>

        {
            atendimento.map(atendimentos=>(
                <>
                <form>
        <table className="table">
        <thead>
                    <tr>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>ATENDIMENTO</th>
                        <th>DEFICIENCIA</th>
                        <th>ENDEREÇO</th>
                      
                        
                    </tr>
                    </thead>
            <tbody>
              <tr>
                <td>
                    <input type="text" defaultValue={atendimentos.nome}placeholder={atendimentos.nome}/>
                </td>
                <td>
                    <input type="text" defaultValue={atendimentos.cpf}placeholder={atendimentos.cpf}/>
                </td>
                <td>
                    <div> 
                        <div>
                        <label> Tipo: </label>
                        <input type="text" defaultValue={atendimentos.tipoAtend[0].tipoAtend}placeholder={atendimentos.tipoAtend[0].tipoAtend}/>
                        </div>

                        <div>
                        <label> Codigo: </label>
                        <input type="text" defaultValue={atendimentos.tipoAtend[0].codigo}placeholder={atendimentos.tipoAtend[0].codigo}/>
                        </div>

                    </div>
                </td>

                <td>
                    <div> 
                        <div>
                        <label> Tipo: </label>
                        <input type="text" defaultValue={atendimentos.tipoDef[0].tipoDef}placeholder={atendimentos.tipoDef[0].tipoDef}/>
                        </div>

                        <div>
                        <label> Codigo: </label>
                        <input type="text" defaultValue={atendimentos.tipoDef[0].codigo}placeholder={atendimentos.tipoDef[0].codigo}/>
                        </div>

                    </div>
                </td>

                <td>
                    <div> 
                        <div>
                        <label> CEP: </label>
                        <input type="text" defaultValue={atendimentos.cep[0].cep}placeholder={atendimentos.cep[0].cep}/>
                        </div>

                        <div>
                        <label> Cidade: </label>
                        <input type="text" defaultValue={atendimentos.cep[0].cidade}placeholder={atendimentos.cep[0].cidade}/>
                        </div>

                        <div>
                        <label> Logradouro: </label>
                        <input type="text" defaultValue={atendimentos.cep[0].logradouro}placeholder={atendimentos.cep[0].logradouro}/>
                        </div>

                        <div>
                        <label> Bairro: </label>
                        <input type="text" defaultValue={atendimentos.cep[0].bairro}placeholder={atendimentos.cep[0].bairro}/>
                        </div>



                    </div>
                </td>


              </tr>
            </tbody>
        </table>

        <button
                    type="button"
                    className="small"
                    
                    
                    >
                     Editar
                    </button>
      </form>

            </>
            ))
        }

        </div>

        
    );
}
    

