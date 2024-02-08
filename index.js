import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express()
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors()); // allows frontend to connect to backend
app.use(morgan("dev")); //logger - info about the request
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({extended: true})) // allow data in url string


app.get('/', (req, res) => {
    res.send('backend...')
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})