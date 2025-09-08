
import express from 'express'
import profileRouter from './routers/profileRouter.js';
import productRouter from './routers/productRouter.js';
import supplierRouter from './routers/supplierRouter.js';
import carRouter from './routers/carRouter.js';
import customerRouter from './routers/customerRouter.js';
import cors from 'cors';

const app = express()
const port = 3333

app.use(cors()) //configura o CORS para aceitar requisições de qualquer origem
app.use(express.json()) //configura o express para receber json no body da requisição


app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)
app.use('/customer', customerRouter)

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)  
})