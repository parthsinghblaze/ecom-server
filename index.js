import express from "express";
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import router from "./src/api/auth/authRouter";

const app = express();

app.use(bodyParser.json());
app.use('/auth', router);
app.use('/products', router);


const CONNECTION_URL = "mongodb+srv://parth:ashuandcow@cluster0.8nfjdv8.mongodb.net/store?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(8000, () => console.log(`Running in the port 8000`)))
    .catch((err) => console.log(err.message));
