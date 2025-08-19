import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: dados
  })
})

//Lista todos os usuários
router.get('/', (req, res) => {
  res.json({message: 'Usuários consultados com sucesso!'})
})

//Consulta um usuário específico
router.get('/:id', (req, res) => {
  const  id  = req.params.id
  res.json({message: `Usuário com ID ${id} consultado com sucesso!`})
})

//Edita um usuário específico
router.put('/:id', (req, res) => {
  const  id  = req.params.id
  const dados = req.body
  res.json({
    message: 'Usuário editado com sucesso!',
    profile: dados
  })
})

router.delete('/:id', (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `Usuário com ID ${id} excluído com sucesso!`})
})

export default router;