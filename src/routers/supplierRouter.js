import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Fornecedor criado com sucesso!',
    supplier: dados
  })
})

//Lista todos os fornecedores
router.get('/', (req, res) => {
  res.json({message: 'Fornecedores consultados com sucesso!'})
})

//Consulta um fornecedor específico
router.get('/:id', (req, res) => {
  const  id  = req.params.id
  res.json({message: `Fornecedor com ID ${id} consultado com sucesso!`})
})

//Edita um fornecedor específico
router.put('/:id', (req, res) => {
  const  id  = req.params.id
  const dados = req.body
  res.json({
    message: 'Fornecedor editado com sucesso!',
    supplier: dados
  })
})

router.delete('/:id', (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `Fornecedor com ID ${id} excluído com sucesso!`})
})

export default router;