import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'carro criado com sucesso!',
    car: dados
  })
})

//Lista todos os carros
router.get('/', (req, res) => {
  res.json({message: 'carros consultados com sucesso!'})
})

//Consulta um carro específico
router.get('/:id', (req, res) => {
  const  id  = req.params.id
  res.json({message: `carro com ID ${id} consultado com sucesso!`})
})

//Atualiza um carro específico
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { marca, modelo } = req.body;
  res.json({
    message: `${marca} ${modelo} com id ${id} alterado`,
    
      marca,
      modelo
    
  });
});


router.delete('/:id', (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `carro com ID ${id} excluído com sucesso!`})
})

export default router;