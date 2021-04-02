import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp, main, humidity, icon}) => {
  // creates a new Date object
  const date = new Date(dt);
  return (
    <Card >
      <Card.Img
        variant="top"
        // generates appropriate icon based on dt info
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Temp: {temp}°C</p>
        
        <p>Humidity: {humidity}%</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
