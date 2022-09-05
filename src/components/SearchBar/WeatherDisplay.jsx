

const WeatherDisplay = (props) => {
  const { weather } = props;
  return(
    <div>
      <h2>Today's weather in...</h2>
      <h2>{weather.name}</h2>
      <h3>{weather.sys.country}</h3>
      <h3>{weather.main.temp}</h3>
      <h3>{weather.weather[0].description}</h3>

    </div>


  )
};

export default WeatherDisplay;
