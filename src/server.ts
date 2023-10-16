import express, {Express} from 'express';
import offer from './routes/offers'

const PORT =  8000;
const app: Express = express();

//initializing all routes
app.use('/', offer);


app.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT}`);
});
