import './loadEnv.js';
import {conn} from './db/conn.js';
conn();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import recipesRouter from './routes/recipes.js'
import usersRouter from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors()); // allows frontend to connect to backend
app.use(morgan("dev")); //logger - info about the request
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({extended: true})) // allow data in url string

//routes
app.use('/api/recipes', recipesRouter);
app.use('/api/users', usersRouter)


app.get('/', (req, res) => {
    res.send('backend test...')
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})