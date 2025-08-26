const createCarController = (req, res) => {
  const dados = req.body;
  res.json({
    message: 'Carro criado com sucesso!',
    car: dados
  });
};

export { createCarController };
