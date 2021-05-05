import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Atendimento from '../models/atendimentoModel.js';
import data from '../data.js';

import { isAdmin, isAuth} from  '../utils.js';

const atendRouter = express.Router();

atendRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
     try {
        const atend = data.atendimento.map((atendimento) => ({
          ...atendimento,
          
        }));
        const createdAtend = await Atendimento.insertMany(atend);
        res.send({ createdAtend});
      } catch {
        res
          .status(500)
          .send({ message: 'Error' });
      }
    })
  );

atendRouter.get(
    '/list',
    expressAsyncHandler(async (req, res) => {
      
      const atend = await Atendimento.find({});
      
      res.send( atend )

    })
  );

atendRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const atend = await Atendimento.findById(req.params.id)
      ;
      if (atend) {
        res.send([atend]);
      } else {
        res.status(404).send({ message: 'Atendimento não encontrado' });
      }
    })
  );

atendRouter.post(
    '/novo',
    expressAsyncHandler(async (req, res) => {
      const atend = new Atendimento({
        nome:req.body.nome,
        cpf: req.body.cpf,
        tipoAtend:req.body.tipoAtend,
        tipoDef:req.body.tipoDef,
        cep:req.body.cep
      });

      const novoAtend = await atend.save();
      res.send({novoAtend });
    })
  );

atendRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const atend = await Atendimento.findById(req.params.id);
      if (atend) {
        const deleteAtend = await atend.remove();
        res.send({ message: 'Atendimento Deletado', atendimento: deleteAtend });
      } else {
        res.status(404).send({ message: 'Atendimento não encontrado' });
      }
    })
  );

atendRouter.put(
    '/:id',
    isAuth,
    
    expressAsyncHandler(async (req, res) => {
      const atendId = req.params.id;
      const atendimento = await Atendimento.findById(atendId);
      if (atendimento) {
        
        atendimento.nome=req.body.nome || atendimento.nome;
        atendimento.cpf = req.body.cpf || atendimento.cpf ;
        atendimento.tipoDef = req.body.tipoDef || atendimento.tipoDef;
        atendimento.tipoAtend = req.body.tipoAtend || atendimento.tipoAtend;
        atendimento.cep = req.body.cep || atendimento.cep;
        
        const updatedAtend = await atendimento.save();
        res.send({ 
            cpf:updatedAtend.cpf,
            nome:updatedAtend.nome,
            _id: updatedAtend._id,
            Atendimento:updatedAtend.tipoAtend[0],
            Deficiencia:updatedAtend.tipoDef[0],
            cep:updatedAtend.cep[0],});
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

export default atendRouter;