import { City } from "../models/forecastModel.js"

// const forecast = []

export const getCity = (req, res) => {
  City.findAll()
  .then(city => {
    res.status(200).send(city)
  })
  .catch(err => {
    console.log(err)
  })
};

export const addCity = (req, res) => {
  City.create({name: req.body.name})
  .then(() => {
    res.status(201).send({message: "City added"})
  })
  .catch(err => {
    console.log(err)
  })
};