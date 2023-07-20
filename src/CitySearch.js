import React from 'react';
import { useState } from 'react';

const CitySearch = ({getAirQuality}) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const formattedCity = inputValue.replace(/ /g, "-");
        getAirQuality(formattedCity);
    }

  return (
    <div>
        <form action="#" onSubmit={handleSearch} className='mb-4'>
            <input type="text" placeholder='Enter City' onChange={handleInputChange} className='form-control'></input>
            <button type='submit' onClick={getAirQuality} className='btn btn-primary mt-3'>Search</button>
        </form>
    </div>
  );
}

export default CitySearch;