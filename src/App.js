import { useState, useEffect, useRef } from 'react';
import './App.css';

import WeatherDisplay from './components/SearchBar/WeatherDisplay';


function App() {

  const [ weather, setWeather] =useState()

    const getWeather = (city) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd1f22729598cb482d2d5c16faf96c1d`)
    .then((res)=> {
      console.log(res);
      return res.json()
    })
    .then((data) => {
      console.log("data", data);
      const errorMessage = data.message;
      if(errorMessage){
        console.log("City not found");
      } else {
        setWeather(data)
        console.log(weather);
      }
      
    })
  }

  // useEffect (getWeather,[])
 // happens on component mount

 const getFormattedWord = (rawWord) => {
  let formattedWord = rawWord.toLowerCase();
  formattedWord = formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1) // returns word with first letter capitalized
  return formattedWord
 }


 const handleButtonSearch = (event) => {
  let rawInput = inputBox.current.value; // gets rid of extra spaces
  while(rawInput.includes("  ")){
    rawInput = rawInput.replaceAll("  ", " ")
  }

  const rawWords = rawInput.split(" ")
  const formattedWords = rawWords.map(word => {
    return getFormattedWord(word)  // spiltting by spaces creating an array of words
  })

  const formattedInput = formattedWords.join(" ") // takes the array and joins words with a space inbetween
  console.log(formattedInput);
  getWeather(formattedInput)
 }

 
 const inputBox = useRef() // creates reference to HTML element

  return (
    <div className="App">
      <header className='weather__header'>
        <h1>Weather App</h1>
      {weather && <WeatherDisplay weather={weather}/>}
      <input ref={inputBox} className='input__box'></input>
      <button className='search__button' onClick={handleButtonSearch}>Search</button>
      </header>
    </div>
  );
}

export default App;
