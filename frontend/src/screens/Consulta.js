import axios from 'axios';
import React,{useEffect,useState} from 'react';
import{useHistory} from 'react-router-dom';


export default function Consulta(){

    
    

    const [atendimento,setAtendimento]=useState([]);
    

    const history=useHistory();

    
    const token = localStorage.getItem('token');
    

    if(!token){
        alert('Não possui autorização para acessar essa rota')
        history.push('/login')}
 
  
    useEffect(()=>{
        
        let mounted=true;
         axios.get('/api/atend/list',{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        }).then(response =>{
            if(mounted){
            setAtendimento(response.data);

        }})

    
        return()=> mounted = false;
        

    },[token]);

   

    async function deleteHandler(id) {
        if (window.confirm("Tem certeza que deseja excluir esse caso?")) {
            try{
                await  axios.delete(`/api/atend/${id}`,{
                    headers:{
                        Authorization:`Bearer ${token}`,
                    }
                }).then(response =>{
                    setAtendimento(atendimento.filter(atendimentos=>atendimentos._id!==id));
        
                })
            
    
            } catch(err) {
                alert(err);
            }
        }
     }
   
   


   
    return(
        <div>
           
            { atendimento !== '' &&

            <>

                    <h1> Atendimentos </h1>
                    <table className="table">
                    <thead>
                    <tr>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>ATENDIMENTO</th>
                        <th>DEFICIENCIA</th>
                        <th>ENDEREÇO</th>
                        <th>OPÇÕES</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {atendimento.map((atendimentos) => (
                        <tr key={atendimentos._id}>
                        <td>{atendimentos.nome}</td>
                        <td>{atendimentos.cpf}</td>
                        <td>{`${atendimentos.tipoAtend[0].tipoAtend} / ${atendimentos.tipoAtend[0].codigo}  `}</td>
                        <td>{`${atendimentos.tipoDef[0].tipoDef}/${atendimentos.tipoDef[0].codigo}`}</td>
                        <td>{
                        `
                            ${atendimentos.cep[0].logradouro} ,
                            ${atendimentos.cep[0].bairro},
                            ${atendimentos.cep[0].cidade} - 
                            ${atendimentos.cep[0].cep}`
                           
                            }
                            
                        </td>
                        <td>

                      <div className='buttons'>

                     <div>
                     <span
                      onClick={()=> history.push(`/editar/${atendimentos._id}`)}
                      > 
                      <div> 
                          <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 
                          </div>
                           </span>
                         
                     </div>


                     <span
                      onClick={()=>deleteHandler(atendimentos._id)}
                      > 
                      <div> 
                          <i class="fa fa-trash-o" aria-hidden="true"></i> 
                          </div>
                          </span>
                     </div>

                        </td>
                        
                        
                        </tr>
                    ))}
                    </tbody>
                    </table>

                    </>


                }
                            
       

        </div>

        
    );
}
    

