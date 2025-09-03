const axios = require('axios');
const cache = require('../utils/cache');
const dotenv = require('dotenv');

dotenv.config();

const API_KEY = process.env.API_KEY; 
const BASE_URL = process.env.BASE_URL;

async function getweather(cityId){

    const cacheKey = `weather_${cityId}`;
    const cacheData = cache.get(cacheKey);
    // console.log(cacheData);
    // console.log(API_KEY);
    // console.log(BASE_URL);
    
    if (cacheData) {
        console.log("cache data",cacheData);
        return cacheData;
        console.log("cache data",cacheData);
        
    }


    const response = await axios.get (BASE_URL, {
        params: { id : cityId, appid: API_KEY, units: 'metric' }
    });
    console.log(response.data);
    
    const data = {
        name : response.data.name,
        description : response.data.weather[0].description,
        temp : response.data.main.temp,
    };

    cache.set (cacheKey,data, 300);

    return data;
}

module.exports = { getweather };