const express = require('express');
const axios = require('axios');
const cors = require('cors');
const api= process.env.Api_key;

const app = express();
const PORT = 3007;
app.use(cors());

app.get('/api/weather', async (req, res) => {///api/data
  try {
   
  api; 
  
  const city = req.query.city;
    
 
   
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=05990d69407df4e39ffc08972a02188b&units=metric`);
    console.log(response.data.coord);

    const forecastData = response.data.list.slice(0, 7).map(item => ({
      temperature: item.main.temp,
      weatherDescription: item.weather[0].description,
      windSpeed: item.wind.speed,
      humidityCheck: item.main.humidity,
      tempMax:item.main.temp_max,
      tempMin:item.main.temp_min,
      icon:item.weather[0].icon

    }));
    console.log(forecastData);
    // send specific weather information back to the client

    res.json({
      city,
      forecast: forecastData,
    });
  } catch (error) {
    // handle errors
    console.error('Error making API call:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
