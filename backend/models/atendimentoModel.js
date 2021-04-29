import mongoose from 'mongoose';

const atendimentoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    cpf: { type: String, required: true },

    tipoAtend: [ 
        { 
        codigo:{ type: String, required: true}, 
        tipoAtend:{ type: String, required: true},
        } 
    ],

    tipoDef:  [
        {
        codigo:{ type: String, required: true},
        tipoDef:{ type: String, required: true},
        }
    ],

    cep: [
        {
        cep:{ type: String, required: true},
        logradouro:{ type: String, required: true},
        bairro: { type: String, required: true},
        cidade: { type: String, required: true},
        } 
    ],
    
  },
  {
    timestamps: true,
  }
);
const Atendimento = mongoose.model('Atendimento', atendimentoSchema);
export default Atendimento;