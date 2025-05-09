const axios = require('axios');

const getWeatherData = async (location, start, end) => {
    const apiKey = process.env.VISUAL_CROSSING_API_KEY;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${start}/${end}?unitGroup=us&key=${apiKey}`;
    console.log('API URL:', url);


    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching weather data:', error.message);
        throw new Error('service: Failed to fetch weather data');
    }
}

module.exports = { getWeatherData };