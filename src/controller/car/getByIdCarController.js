const getByIdCarController = (req, res) => {
  const id = req.params.id;
  res.json({ message: `Carro com ID ${id} consultado com sucesso!` });
};

export { getByIdCarController };
