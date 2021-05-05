import axios from 'axios';
import React,{useEffect,useState} from 'react';
import{useHistory} from 'react-router-dom';



export default function Editar(props){

    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [codigoAtend,setCodigoAtend] = useState('');
    const [codigoDef,setCodigoDef] = useState('');
    const [atend,setAtend] = useState('');
    const [deficiencia,setDeficiencia] = useState(''); 
    const [cep,setCep] = useState('');
    const [cidade,setCidade] = useState('');
    const [logradouro,setLogradouro] = useState('');
    const [bairro,setBairro] = useState('');

    

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
            setNome(response.data[0].nome)
            setCpf(response.data[0].cpf)
            setCodigoAtend(response.data[0].tipoAtend[0].codigo)
            setAtend(response.data[0].tipoAtend[0].tipoAtend)
            setCodigoDef(response.data[0].tipoDef[0].codigo)
            setDeficiencia(response.data[0].tipoDef[0].tipoDef)
            setCep(response.data[0].cep[0].cep)
            setLogradouro(response.data[0].cep[0].logradouro)
            setCidade(response.data[0].cep[0].cidade)
            setBairro(response.data[0].cep[0].bairro)
            
           

        }})

    
        return()=> mounted = false;
        

    },[token,props.match.params.id]);

   

   
   
    async function handleEdit(e){
        e.preventDefault();
       
        const data ={
            nome,
            cpf,
            tipoAtend:{codigo:codigoAtend,tipoAtend:atend},
            tipoDef:{codigo:codigoDef,tipoDef:deficiencia},
            cep:{cep:cep,logradouro:logradouro,bairro:bairro,cidade:cidade },          
        
        };

        try{
           await axios.put(`/api/atend/${props.match.params.id}`,data,{
                headers:{
                        Authorization:`Bearer ${token}`,
                    }
           }) 
                
    
           
            alert('Atendimento cadastrado com sucesso!');
            history.push('/home')

        } catch(err){
            alert(err)

        }
         
    }


   
    return(
        <div>

        {
            atendimento.map(atendimentos=>(
                <>
                <form onSubmit={handleEdit}>
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
                    <input type="text" 
                    defaultValue={nome}
                    placeholder={atendimentos.nome}
                    onChange={(e) => setNome(e.target.value)}/>
                </td>
                <td>
                    <input type="text" 
                    defaultValue={cpf}
                    placeholder={atendimentos.cpf}
                    onChange={(e) => setCpf(e.target.value)}/>
                </td>
                <td>
                    <div> 
                        <div>
                        <label> Tipo: </label>
                        <input type="text" 
                        defaultValue={atend}
                        placeholder={atendimentos.tipoAtend[0].tipoAtend}
                        onChange={(e) => setAtend(e.target.value)}/>
                        </div>

                        <div>
                        <label> Codigo: </label>
                        <input type="text" 
                        defaultValue={codigoAtend}
                        placeholder={atendimentos.tipoAtend[0].codigo}
                        onChange={(e) => setCodigoAtend(e.target.value)}/>
                        </div>

                    </div>
                </td>

                <td>
                    <div> 
                        <div>
                        <label> Tipo: </label>
                        <input type="text" 
                        defaultValue={deficiencia}
                        placeholder={atendimentos.tipoDef[0].tipoDef}
                        onChange={(e) => setDeficiencia(e.target.value)}/>
                        </div>

                        <div>
                        <label> Codigo: </label>
                        <input type="text" 
                        defaultValue={codigoDef}
                        placeholder={atendimentos.tipoDef[0].codigo}
                        onChange={(e) => setCodigoDef(e.target.value)}/>
                        </div>

                    </div>
                </td>

                <td>
                    <div> 
                        <div>
                        <label> CEP: </label>
                        <input type="text" 
                        defaultValue={cep}
                        placeholder={atendimentos.cep[0].cep}
                        onChange={(e) => setCep(e.target.value)}/>
                        </div>

                        <div>
                        <label> Cidade: </label>
                        <input type="text" 
                        defaultValue={cidade}
                        placeholder={atendimentos.cep[0].cidade}
                        onChange={(e) => setCidade(e.target.value)}/>
                        </div>

                        <div>
                        <label> Logradouro: </label>
                        <input type="text" 
                        defaultValue={logradouro}
                        placeholder={atendimentos.cep[0].logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}/>
                        </div>

                        <div>
                        <label> Bairro: </label>
                        <input type="text" 
                        defaultValue={bairro}
                        placeholder={atendimentos.cep[0].bairro}
                        onChange={(e) => setBairro(e.target.value)}/>
                        </div>



                    </div>
                </td>


              </tr>
            </tbody>
        </table>

        <button
                    type="submit"
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
    

