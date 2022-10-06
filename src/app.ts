import express from 'express';
import errorMidleware from './middlewares/Error';
import productRouter from './routes/product.route'
const app = express();

app.use(express.json());

app.use('/products', productRouter)
app.use(errorMidleware)
//

export default app;
