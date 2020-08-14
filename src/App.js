import React from 'react';
import Info from './componets/Info';
import Rate from './componets/Rate';
import Form from './componets/Form';

const API_KEY = "9ef427ff057a6ea0fa8c51701d1fecdc";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; // Получение значения с поля input

    if(city) { // Проверка введен ли город
      const api_url = 
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json(); // Преобразование в json

      var temp = data.main.temp - 273.15; // Перевод в обычный вид
      console.log(data);

      var date = new Date();

        var sunset = data.sys.sunset * 1000 ;
        date.setTime(sunset);
        var sunset_date = date.toLocaleTimeString();

        var sunrise = data.sys.sunrise * 1000 ;
        date.setTime(sunrise);
        var sunrise_date = date.toLocaleTimeString();
    


      this.setState({ // Получение данных из json файла
        temp: temp.toFixed(2),
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else { 
      this.setState ({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      })

    }
  }

  render() {
    return (
      <div>
        <Info /> 
        <Form weatherMethod={this.gettingWeather} />
        <Rate 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
