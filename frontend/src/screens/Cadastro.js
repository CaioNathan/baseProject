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
            alert('Verifique se todos os campos foram preenchidos corretamente. ')

        }
         
    }
   
  

    return(
        <div>
             
            <div>

            <form className="sky-form" onSubmit={handleAtendimento}>
				<header>             
                Atendimento
                </header>
				
				<fieldset>	

                    <div class="row">

                    <section class="col col-6">
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input type="text" placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Nome do Cliente</b>
							</label>
					</section>

                    <section class="col col-6">
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input id="cpf"
                                type="text"
                                placeholder="CPF"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">CPF</b>
							</label>
						</section>

		

                    </div>

                    <div class="row">

                    <section class="col col-6">
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input 
                                id="Atendimento"
                                type="text"
                                placeholder="Atendimento"
                                value={atendimento}
                                onChange={(e) => setAtendimento(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Atendimento</b>
							</label>
					</section>

                    <section class="col col-6">
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input 
                                id="codAtend"
                                type="text"
                                placeholder="Código do Atendimento"
                                value={codigoAtend}
                                onChange={(e) => setCodigoAtend(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Código do Atendimento</b>
							</label>
						</section>

		

                         </div>

                             <div class="row">

                            <section class="col col-6">
                                    <label class="input">
                                        <i class="icon-append icon-user"></i>
                                        <input 
                                        id="Deficiencia"
                                        type="text"
                                        placeholder="Deficiência"
                                        value={deficiencia}
                                        onChange={(e) => setDeficiencia(e.target.value)}/>
                                        <b class="tooltip tooltip-bottom-right">Deficiencia</b>
                                    </label>
                            </section>

                            <section class="col col-6">
                                    <label class="input">
                                        <i class="icon-append icon-user"></i>
                                        <input 
                                        id="codigoDef"
                                        type="text"
                                        placeholder="Código da Deficiencia"
                                        value={codigoDef}
                                        onChange={(e) => setCodigoDef(e.target.value)}/>
                                        <b class="tooltip tooltip-bottom-right">Código da Deficiencia</b>
                                    </label>
                                </section>



                            </div>


                            <div class="row">

                                <section class="col col-6">
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                            id="cep"
                                            type="text"
                                            placeholder="CEP"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">CEP</b>
                                        </label>
                                </section>

                                <section class="col col-6">
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                           id="cidade"
                                           type="text"
                                           placeholder="Cidade"
                                           value={cidade}
                                           onChange={(e) => setCidade(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Cidade</b>
                                        </label>
                                    </section>



                                </div>

                                <div class="row">

                                <section class="col col-6">
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                            id="bairro"
                                            type="text"
                                            placeholder="Bairro"
                                            value={bairro}
                                            onChange={(e) => setBairro(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Bairro</b>
                                        </label>
                                </section>

                                <section class="col col-6">
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                           id="logradouro"
                                           type="text"
                                           placeholder="Logradouro"
                                           value={logradouro}
                                           onChange={(e) => setLogradouro(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Logradouro</b>
                                        </label>
                                    </section>



                                </div>


                    
                    <button type="submit" className="button">Cadastrar</button>
                    
					
				
				</fieldset>
	
			</form>




                <form className='formCadastro' onSubmit={handleAtendimento}>

                <fieldset>
                    <legend>Atendimento</legend>
                    

                <div className="both">
                <label htmlFor="cpf"> CPF: </label>
                <input
                
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

               <div className="both">
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


               

               
                <div className="both">
                <label htmlFor="Deficiencia"> Deficiência: </label>
                <input
                id="Deficiencia"
                type="text"
                placeholder="Nome da Deficiencia"
                value={deficiencia}
                onChange={(e) => setDeficiencia(e.target.value)}
                ></input>
               
                <label htmlFor="codDef"> Código: </label>
                <input
                id="codDef"
                type="text"
                placeholder="Código da Deficiencia"
                value={codigoDef}
                onChange={(e) => setCodigoDef(e.target.value)}
                ></input>
                </div>

             

               

               <div className="both">
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

               
               <div className="both">
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