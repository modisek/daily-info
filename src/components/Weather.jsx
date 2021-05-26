import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Weather = () => {
  let [weatherText, setWeatherText] = useState("");
  let [locale, setLocation] = useState([]);

  navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    setLocation([Math.round(lat), Math.round(lon)]);
  });
  const [lat, lon] = locale;
  console.log(lat,lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherText(data.main.temp));
  }, []);
  return (
    <Container>
      <Icon src="http://openweathermap.org/img/wn/10d@2x.png"></Icon>
      <TextContainer>
        <p>{Math.round(weatherText)}&deg;C</p>
      </TextContainer>
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  height: 200px;
  width: 20vw;
  border-radius: 30px;
 margin: 0 20px; 
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 40px rgba(0, 0, 0, 0.09),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

	@media(max-width:768px){
	background-color:black;
	height:160px;
	}
`;
const Icon = styled.img`
  height: 80px;
  width: 80px;
  left: 0;
`;
const TextContainer = styled.div`
  p {
    font-size: 45px;
    color: grey;
  }
`;
