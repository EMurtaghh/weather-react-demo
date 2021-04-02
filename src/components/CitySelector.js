import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>City Weather Lookup</h1>
            <h2>Enter a city</h2>
          </Col>
        </Row>
        
        <Row>
          <Col xs={4}>
            <FormControl
            // searches city entered in via formControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            { /* onClick handler for bringing up weather in city */ }
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;
