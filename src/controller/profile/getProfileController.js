export const getProfileController =  (req, res) => {
  const  id  = req.params.id
  res.json({message: `Usuário com ID ${id} consultado com sucesso!`})
}