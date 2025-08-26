export const deleteProductConroller = (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `Produto com ID ${id} excluído com sucesso!`})
}