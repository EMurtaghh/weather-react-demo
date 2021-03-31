import React from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* dt is in unix-seconds but javascript uses milliseconds, multiply with 1000 */}
      <WeatherCard
        dt={1602104400 * 1000}
        temp_min="22.67"
        temp_max="24.39"
        main="Clear"
        icon="01d"
      />
    </div>
  );
};

export default App;
