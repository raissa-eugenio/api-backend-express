export const createProductCrontroller = (req, res) => {
  const dados = req.body
  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
}