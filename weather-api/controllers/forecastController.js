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
  const {id, name, country, temp, description} = req.body
  City.create({id, name, country, temp, description})
  .then(() => {
    res.status(201).send({message: "City added"})
  })
  .catch(err => {
    console.log(err)
  })
};