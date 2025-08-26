const deleteCustomerController = (req, res) => {
  const id = req.params.id;
  console.log(`ID: ${id} excluído com sucesso!`);
  res.json({ message: `Cliente com ID ${id} excluído com sucesso!` });
};

export { deleteCustomerController };
