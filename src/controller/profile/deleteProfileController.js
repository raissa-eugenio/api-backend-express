export const deleteProfileController = (req, res) => {
  const  id  = req.params.id
  console.log(`ID: ${id} excluído com sucesso!`)
  res.json({message: `Usuário com ID ${id} excluído com sucesso!`})
}