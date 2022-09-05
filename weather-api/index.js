import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import router from "./routes/forecast.js";
import { sequelize } from './db/index.js';

const app = express();

const port = process.env.PORT || 3007

sequelize.sync()
.then((result => {
  console.log(result)
}))
.catch(err => {
  console.log(err)
});

app.use(cors({
  origin:'http://localhost:3007'
}));

app.listen(port,(req, res) => {
  console.log("Server is Running on " + port);
})

app.use(bodyParser.json());

app.use("/city", router);

app.use("/api/forecast", router);

app.get('/api', (req, res) => {
  res.status(200).send("Thanks for checking the weather!!")
})

// app.post('/city', (req, res) => {
//   res.status(201).send("city posted!!")
// })