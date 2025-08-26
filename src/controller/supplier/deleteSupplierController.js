export const deleteSupplierController = (req, res) => {
  const id = req.params.id;
  console.log(`ID: ${id} excluído com sucesso!`);
  res.json({ message: `Fornecedor com ID ${id} excluído com sucesso!` });
};


