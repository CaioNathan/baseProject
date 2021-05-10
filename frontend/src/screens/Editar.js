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
        if (window.confirm("Tem certeza que deseja excluir esse caso?")){
            try{
                await axios.put(`/api/atend/${props.match.params.id}`,data,{
                     headers:{
                             Authorization:`Bearer ${token}`,
                         }
                }) 
                     
         
                
                 alert('Editado com sucesso!');
                 history.push('/home')
     
             } catch(err){
                 alert('Não foi possível editar, tente novamente.')
     
             }

        }
        

       
         
    }


   
    return(
        <div>

        {
            atendimento.map(atendimentos=>(
                <>
               <form className="sky-form" onSubmit={handleEdit}>
				<header>             
                Atendimento
                </header>
				
				<fieldset>	

                    <div class="row">

                    <section class="col col-6">
                    <label className="label"> Nome </label>
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input type="text" placeholder="Nome"
                                defaultValue={atendimentos.nome}
                                onChange={(e) => setNome(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Nome do Cliente</b>
							</label>
					</section>

                    <section class="col col-6">
                    <label className="label"> CPF </label>
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input id="cpf"
                                type="text"
                                placeholder="CPF"
                                defaultValue={atendimentos.cpf}
                                onChange={(e) => setCpf(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">CPF</b>
							</label>
						</section>

		

                    </div>

                    <div class="row">

                    <section class="col col-6">
                    <label className="label"> Atendimento </label>
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input 
                                id="Atendimento"
                                type="text"
                                placeholder="Atendimento"
                                defaultValue={atendimentos.tipoAtend[0].tipoAtend}
                                onChange={(e) => setAtendimento(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Atendimento</b>
							</label>
					</section>

                    <section class="col col-6">
                    <label className="label"> Codigo  </label>
							<label class="input">
                                <i class="icon-append icon-user"></i>
								<input 
                                id="codAtend"
                                type="text"
                                placeholder="Código do Atendimento"
                                defaultValue={atendimentos.tipoAtend[0].codigo}
                                onChange={(e) => setCodigoAtend(e.target.value)}/>
                                <b class="tooltip tooltip-bottom-right">Código do Atendimento</b>
							</label>
						</section>

		

                         </div>

                             <div class="row">

                            <section class="col col-6">
                            <label className="label"> Deficiencia </label>
                                    <label class="input">
                                        <i class="icon-append icon-user"></i>
                                        <input 
                                        id="Deficiencia"
                                        type="text"
                                        placeholder="Deficiência"
                                        defaultValue={atendimentos.tipoDef[0].tipoDef}
                                        onChange={(e) => setDeficiencia(e.target.value)}/>
                                        <b class="tooltip tooltip-bottom-right">Deficiencia</b>
                                    </label>
                            </section>

                            <section class="col col-6">
                            <label className="label"> Codigo </label>
                            
                                    <label class="input">
                                        <i class="icon-append icon-user"></i>
                                        <input 
                                        id="codigoDef"
                                        type="text"
                                        placeholder="Código da Deficiencia"
                                        defaultValue={atendimentos.tipoDef[0].codigo}
                                        onChange={(e) => setCodigoDef(e.target.value)}/>
                                        <b class="tooltip tooltip-bottom-right">Código da Deficiencia</b>
                                    </label>
                                </section>



                            </div>


                            <div class="row">

                                <section class="col col-6">
                                <label className="label"> CEP </label>
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                            id="cep"
                                            type="text"
                                            placeholder="CEP"
                                            defaultValue={atendimentos.cep[0].cep}
                                            onChange={(e) => setCep(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">CEP</b>
                                        </label>
                                </section>

                                <section class="col col-6">
                                <label className="label"> Cidade </label>
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                           id="cidade"
                                           type="text"
                                           placeholder="Cidade"
                                           defaultValue={atendimentos.cep[0].cidade}
                                           onChange={(e) => setCidade(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Cidade</b>
                                        </label>
                                    </section>



                                </div>

                                <div class="row">

                                <section class="col col-6">
                                <label className="label"> Bairro </label>
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                            id="bairro"
                                            type="text"
                                            placeholder="Bairro"
                                            defaultValue={atendimentos.cep[0].bairro}
                                            onChange={(e) => setBairro(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Bairro</b>
                                        </label>
                                </section>

                                <section class="col col-6">
                                <label className="label"> Logradouro </label>
                                        <label class="input">
                                            <i class="icon-append icon-user"></i>
                                            <input 
                                           id="logradouro"
                                           type="text"
                                           placeholder="Logradouro"
                                           defaultValue={atendimentos.cep[0].logradouro}
                                           onChange={(e) => setLogradouro(e.target.value)}/>
                                            <b class="tooltip tooltip-bottom-right">Logradouro</b>
                                        </label>
                                    </section>



                                </div>


                    
                    <button type="submit" className="button">Editar</button>
                    
					
				
				</fieldset>
	
			</form>

            </>
            ))
        }

        </div>

        
    );
}
    

