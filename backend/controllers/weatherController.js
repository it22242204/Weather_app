const weatherAPI = require('../api/weatherAPI');
const cities = require('../utils/cities.json');

const getWeatherByCity = async (req, res) => {
    try {
        const results = await Promise.all(
            cities.List.map(async city => {
                // console.log(city.CityName);
                const weather = await weatherAPI.getweather(city.CityCode);
                return weather;
            })
        );
        console.log(results);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
}

module.exports = { getWeatherByCity };