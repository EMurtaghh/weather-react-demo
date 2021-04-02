import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './api/config'
import WeatherList from './components/WeatherList';

const App = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data);

    // loads weather data, throws error if unable to fetch matching city name w/ api
    const getContent = () => {
    if(error) return <h2>Unable to display target city. ERROR: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}&units=metric`)} />
      {getContent()}
    </Container>
  );
};

export default App;
