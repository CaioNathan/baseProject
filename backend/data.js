import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nathan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    
  ],
  atendimento: [
    {
      cpf: '05404225173',
      tipoAtend:[
         {
          codigo: '123',
          tipoAtend:'Tipo',
        }
      ], 
      tipoDef:[
        {
         codigo: '12345',
         tipoDef:'Tipo',
       }
      ],
      cep:[
          {
            cep:'73105903',
            logradouro:'DF-425',
            bairro:'Grande Colorado',
            cidade:'Sobradinho',
          }
      ]
      
    },

    {
        cpf: '05404225175',
        tipoAtend:[
           {
            codigo: '157',
            tipoAtend:'Tipo',
          }
        ], 
        tipoDef:[
          {
           codigo: '151',
           tipoDef:'Tipo',
         }
        ],
        cep:[
            {
              cep:'73105908',
              logradouro:'DF-150',
              bairro:'Grande Colorado',
              cidade:'Sobradinho',
            }
        ]
  
      
        
      },
    
   
    
    
  ],
};
export default data;
