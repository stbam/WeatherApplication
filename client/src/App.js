import React, { useState,useEffect } from 'react';
import sunny from './assets/01d.png'
import sun_with_cloud from './assets/02d.png'
import cloud from './assets/03d.png'
import double_cloud from './assets/04d.png'
import rain from './assets/09d.png'
import rain_with_sun_cloud from './assets/10d.png'
import snow from './assets/13d.png'
import wind from './assets/50d.png'
import thunder from './assets/11d.png'
import axios from 'axios';
import './App.css';
import { UilMoon,UilSearch,UilWind,UilWater } from '@iconscout/react-unicons'


const WeatherApp=()=>{
  

  const [city, setCity] = useState('New York'); //  default city

  
  const fetchData = async () => {
    try {
      const cityInput = document.getElementById('search');
      const city = cityInput.value;


      const response = await axios.get(`http://localhost:3007/api/weather?city=${city}`);

   //   console.log(response.data);
      const data = response.data;
      /* top left */
     

      document.getElementById('top-degree').innerHTML = `${Math.floor(data.forecast[0].temperature)}C°`;
      document.getElementById('sun').innerHTML = `${data.forecast[0].weatherDescription}`;
      document.getElementById('wind').innerHTML = "Wind: " + `${data.forecast[0].windSpeed}` + "mph";
      document.getElementById('humidity').innerHTML = `Humidity ${data.forecast[0].humidityCheck} %`;
      const topImageElement = document.getElementById('sep-img');
      
      /*cards*/ 
      const cards = data.forecast.slice(0);
      cards.forEach((day,index)=>{

        if (day.icon === "01d" || day.icon === "01n") {
          topImageElement.src = sunny;
        } else if (day.icon === "02d" || day.icon === "02n") {
          topImageElement.src = sun_with_cloud;
        } else if (day.icon === "03d" || day.icon === "03n") {
          topImageElement.src = cloud;
        } else if (day.icon === "04d" || day.icon === "04n") {
          topImageElement.src = double_cloud;
        } else if (day.icon === "09d" || day.icon === "09n") {
          topImageElement.src = rain;
        } else if (day.icon === "10d" || day.icon === "10n") {
          topImageElement.src = rain_with_sun_cloud;
        } else if (day.icon === "11d" || day.icon === "11n") {
          topImageElement.src = thunder;
        } else if (day.icon === "13d" || day.icon === "13n") {
          topImageElement.src = snow;
        } else if (day.icon === "50d" || day.icon === "50n") {
          topImageElement.src = wind;
        }
        
  
        const card = document.getElementById(`card-${index + 1}`);
        const dayElement = card.querySelector('.day');
        const imageElement = card.querySelector('img');
        const upperDegElement = card.querySelector('.upper-deg');
        const lowerDegElement = card.querySelector('.lower-deg');
        
        const currentDayIndex = new Date().getDay();
       // console.log(currentDayIndex)
    

     
        
       

        //console.log(cards[index].icon);
       
        if(cards[index].icon=="01d" || cards[index].icon=="01n"){
          imageElement.src = sunny;
        }else if (cards[index].icon=="02d"|| cards[index].icon=="02n" ){
          imageElement.src = sun_with_cloud;
        }else if (cards[index].icon=="03d"|| cards[index].icon=="03n" ){
          imageElement.src = cloud;
        }else if (cards[index].icon=="04d"|| cards[index].icon=="04n" ){
          imageElement.src = double_cloud;
        }else if (cards[index].icon=="09d"|| cards[index].icon=="09n" ){
          imageElement.src = rain;
        }else if (cards[index].icon=="10d"|| cards[index].icon=="10n" ){
          imageElement.src = rain_with_sun_cloud;
        }else if (cards[index].icon=="11d"|| cards[index].icon=="11n" ){
          imageElement.src = thunder;
        }else if (cards[index].icon=="13d"|| cards[index].icon=="13n" ){
          imageElement.src = snow;
        }else if (cards[index].icon=="50d"|| cards[index].icon=="50n" ){
          imageElement.src = wind;
        }
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay= document.getElementById('day');
        const cardDayIndex = (currentDayIndex + index + 1) % 7; // Ensure it wraps around if it goes beyond Saturday
        currentDay.innerHTML = daysOfWeek[cardDayIndex];
 
       // console.log(imageElement.src)
       if (currentDayIndex === index+1) { 
         currentDay.innerHTML= daysOfWeek[currentDayIndex];
        //console.log(currentDayIndex);
      
        // Update the top section elements
        const topDegreeElement = document.getElementById('top-degree');
        const sunElement = document.getElementById('sun');
        const windElement = document.getElementById('wind');
        const humidityElement = document.getElementById('humidity');
        const topImageElement = document.getElementById('sep-img');
      
        topDegreeElement.innerHTML = `${Math.floor(day.tempMax)}C°`;
        sunElement.innerHTML = `${day.weatherDescription}`;
        windElement.innerHTML = "Wind: " + `${day.windSpeed}` + "mph";
        humidityElement.innerHTML = `Humidity ${day.humidityCheck} %`;
      
//updates top element separte from other image cards
        if (day.icon === "01d" || day.icon === "01n") {
          topImageElement.src = sunny;
        } else if (day.icon === "02d" || day.icon === "02n") {
          topImageElement.src = sun_with_cloud;
        } else if (day.icon === "03d" || day.icon === "03n") {
          topImageElement.src = cloud;
        } else if (day.icon === "04d" || day.icon === "04n") {
          topImageElement.src = double_cloud;
        } else if (day.icon === "09d" || day.icon === "09n") {
          topImageElement.src = rain;
        } else if (day.icon === "10d" || day.icon === "10n") {
          topImageElement.src = rain_with_sun_cloud;
        } else if (day.icon === "11d" || day.icon === "11n") {
          topImageElement.src = thunder;
        } else if (day.icon === "13d" || day.icon === "13n") {
          topImageElement.src = snow;
        } else if (day.icon === "50d" || day.icon === "50n") {
          topImageElement.src = wind;
        }
      }
      
      
        

        upperDegElement.innerHTML = `${Math.floor(day.tempMax)}C°`;
        lowerDegElement.innerHTML = `${Math.floor(day.tempMin)}C°`;
      })
      
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };
  useEffect(() => {
    fetchData(); // fetch data on component mount
  }, []); // empty dependency array ensures it only runs once on mount





  let isCelsius = true;

function toggleTemperatureUnit() {
  const cards = document.getElementsByClassName('card');
  const faren=document.getElementById('farenheight');
  const topdeg=document.getElementById('top-degree');

console.log(parseInt(topdeg.innerHTML))

  for (let card of cards) {
    const upperDegElement = card.querySelector('.upper-deg');
    const lowerDegElement = card.querySelector('.lower-deg');

    let tempUnitMax;
    let tempUnitMin;
  
    if (isCelsius) {
    console.log(faren)
      faren.innerHTML="F";
      topdeg.innerHTML=parseInt(topdeg.innerHTML)+"F";
      // convert Celsius to Fahrenheit using parseint
      tempUnitMax = parseInt(upperDegElement.innerHTML);
      tempUnitMin = parseInt(lowerDegElement.innerHTML);

      const fahrenheitMax = (tempUnitMax * 9/5) + 32;
      const fahrenheitMin = (tempUnitMin * 9/5) + 32;

      upperDegElement.innerHTML = `${Math.floor(fahrenheitMax)}F`;
      lowerDegElement.innerHTML = `${Math.floor(fahrenheitMin)}F`;
    } else {
      faren.innerHTML="C°";
      topdeg.innerHTML=parseInt(topdeg.innerHTML)+"C°";
      tempUnitMax = parseInt(upperDegElement.innerHTML);
      tempUnitMin = parseInt(lowerDegElement.innerHTML);

      const celsiusMax = (tempUnitMax - 32) * 5/9;
      const celsiusMin = (tempUnitMin - 32) * 5/9;

      upperDegElement.innerHTML = `${Math.floor(celsiusMax)}C°`;
      lowerDegElement.innerHTML = `${Math.floor(celsiusMin)}C°`;
    }
  }

  // toggle the temperature unit for the next click
  isCelsius = !isCelsius;
}

  
  
  

  return (
    <div className="App">
      <div className='top'>
      <div className='top-left'>
        <div className='deg-temp'>
                <img src={sunny} alt="" id='sep-img'/>
                <div className='top-search'>
                <div className='top-degree' id='top-degree'>62C°</div>
                <div className='searchsvg'>
                  <input className='search' placeholder='Search...' id='search' value={city} onChange={(e)=>setCity(e.target.value)}></input>
                  <div className='search-icon' onClick={()=>{fetchData()}}> <UilSearch id="searchpointer"/></div>
                </div>
        </div>
        </div>

        <div className='fare-celc'>
            <div className='farenheight' onClick={toggleTemperatureUnit} id="farenheight">C</div>
           
        </div>
        <div className='precip-hum'>

          <div className='topdetail' id="precipitation"></div> {/*Precipitation: 0%*/}
          <div className='topdetail' id="humidity">Humidity: 59%</div>
          <div className='topdetail' id="wind">Wind: 7mph</div>
        </div>
        <div className="top-right">
            <div className="top-right-info">
                <div id="weather">Weather</div>
                <div id="day">Thursday</div>
                <div id="sun">Sunny</div>
            </div>
        </div>
      </div>
      </div>
      
      <div className="lower-info">
            <div className="cards">
              <div className='card' id="card-1">
                 <div className='day'>Mon</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-2">
                 <div className='day'>Tue</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-3">
                 <div className='day'>Wed</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-4">
                 <div className='day'>Thu</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-5">
                 <div className='day'>Fri</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-6">
                 <div className='day'>Sat</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>
              <div className='card' id="card-7">
                 <div className='day'>Sun</div>
                  <img src={sunny} alt="" id='image'/>
                    <div className="degrees">
                      <div className="upper-deg">68C°</div>
                      <div className="lower-deg">48C°</div>
                    </div>
              </div>


            </div>
      </div>
    </div>
  );

}

export default WeatherApp;