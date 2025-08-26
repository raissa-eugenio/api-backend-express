const deleteCarController = (req, res) => {
  const id = req.params.id;
  console.log(`ID: ${id} excluído com sucesso!`);
  res.json({ message: `Carro com ID ${id} excluído com sucesso!` });
};

export { deleteCarController };
