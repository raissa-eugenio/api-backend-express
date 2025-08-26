const editCarController = (req, res) => {
  const id = req.params.id;
  const dados = req.body;
  res.json({
    message: 'Carro editado com sucesso!',
    car: dados
  });
};

export { editCarController };
