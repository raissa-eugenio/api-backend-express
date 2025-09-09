import { remove } from '../../models/productModel.js'

export const deleteProductController = async (req, res) => {
  const id = req.params.id
  const result = await remove(+id)
  res.json({
    message: `Produto com ID ${id} excluído com sucesso!`,
    product: result
  })
}