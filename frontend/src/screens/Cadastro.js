import React, { useState } from 'react';
import{useHistory} from 'react-router-dom';
import Axios from 'axios'

export default function Cadastro(){

    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [codigoAtend,setCodigoAtend] = useState('');
    const [codigoDef,setCodigoDef] = useState('');
    const [atendimento,setAtendimento] = useState('');
    const [deficiencia,setDeficiencia] = useState(''); 
    const [cep,setCep] = useState('');
    const [cidade,setCidade] = useState('');
    const [logradouro,setLogradouro] = useState('');
    const [bairro,setBairro] = useState('');

    const history=useHistory();

    const token = localStorage.getItem('token');

    if(!token){
       
        history.push('/')
        alert('Não possui autorização para acessar essa rota')
    
    }


    async function handleAtendimento(e){
        e.preventDefault();
       
        const data ={
            nome,
            cpf,
            tipoAtend:{codigo:codigoAtend,tipoAtend:atendimento},
            tipoDef:{codigo:codigoDef,tipoDef:deficiencia},
           
            cep:{cep:cep,logradouro:logradouro,bairro:bairro,cidade:cidade },          
        
        };

        try{
           await Axios.post('/api/atend/novo',data) 
                
    
           
            alert('Atendimento cadastrado com sucesso!');
            history.push('/home')

        } catch(err){
            alert(err)

        }
         
    }
   
  

    return(
        <div>
             
            <div>
                <form className='formCadastro' onSubmit={handleAtendimento}>

                <fieldset>
                    <legend>Atendimento</legend>
                    

                <div>
                <label htmlFor="cpf"> CPF: </label>
                <input
                className="primeiroInput"
                id="cpf"
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                ></input>

                <label htmlFor="nome"> Nome: </label>
                <input
                id="nome"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                ></input>
               </div>

               <div>
                <label htmlFor="Atendimento"> Atendimento: </label>
                <input
                id="Atendimento"
                type="text"
                placeholder="Nome do Atendimento"
                value={atendimento}
                onChange={(e) => setAtendimento(e.target.value)}
                ></input>

                <label htmlFor="codAtend"> Código: </label>
                <input
                id="codAtend"
                type="text"
                placeholder="Código do Atendimento"
                value={codigoAtend}
                onChange={(e) => setCodigoAtend(e.target.value)}
                ></input>


               </div>


               

               <div className="formDiv">
                <div>
                <label htmlFor="Deficiencia"> Deficiência: </label>
                <input
                id="Deficiencia"
                type="text"
                placeholder="Nome da Deficiencia"
                value={deficiencia}
                onChange={(e) => setDeficiencia(e.target.value)}
                ></input>
                </div>
                <div>
                <label htmlFor="codDef"> Código: </label>
                <input
                id="codDef"
                type="text"
                placeholder="Código da Deficiencia"
                value={codigoDef}
                onChange={(e) => setCodigoDef(e.target.value)}
                ></input>
                </div>

               </div>


               

               <div>
                <label htmlFor="cep"> CEP: </label>
                <input
                className="primeiroInput"
                id="cep"
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                ></input>

                <label htmlFor="cidade"> Cidade: </label>
                <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                ></input>
               </div>

               
               <div>
                <label htmlFor="logradouro"> Logradouro: </label>
                <input
                className="primeiroInput"
                id="logradouro"
                type="text"
                placeholder="Logradouro"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                ></input>

                <label htmlFor="bairro"> Bairro: </label>
                <input
                id="bairro"
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                ></input>

               </div>

               

               <div>
              <label></label>
              <button className="cadastro" type="submit">
                Cadastrar
              </button>
            </div>

            </fieldset>     


                </form>
            </div>


        </div>
    );
}