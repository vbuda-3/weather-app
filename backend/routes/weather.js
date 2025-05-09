const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../services/weatherService');

router.get('/', async (req, res) => {
    const { location, start, end } = req.query;
    if (!location || !start || !end) {
        return res.status(400).json({ error: 'Location, start date, and end date are required' });
    }
    try {
        const weatherData = await getWeatherData(location, start, end);
        const filteredData = weatherData.days.map(day => ({
            date: day.datetime,
            high: day.tempmax,
            low: day.tempmin,
            conditions: day.conditions,
            feelslike: day.feelslike,
            icon: day.icon,

        }));

        res.json({
            location: weatherData.resolvedAddress,
            timezone: weatherData.timezone,
            forecast: filteredData,
        });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

module.exports = router;