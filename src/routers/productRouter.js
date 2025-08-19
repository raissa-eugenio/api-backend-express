import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
})

//Lista todos os Produtos
router.get('/', (req, res) => {
  res.json({message: 'Produtos consultados com sucesso!'})
})

//Consulta um Produto específico
router.get('/:id', (req, res) => {
  const  id  = req.params.id
  res.json({message: `Produto com ID ${id} consultado com sucesso!`})
})

//Edita um Produto específico
router.put('/:id', (req, res) => {
  const  id  = req.params.id
  const dados = req.body
  res.json({
    message: 'Produto editado com sucesso!',
    product: dados
  })
})

router.delete('/:id', (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `Produto com ID ${id} excluído com sucesso!`})
})

export default router;