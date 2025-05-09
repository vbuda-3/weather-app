import axios from "axios";

const fetchWeather = async (location, start, end) => {
  try {
    const response = await axios.get("http://34.229.16.212:5000/api/weather", {
      params: { location, start, end },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

export default fetchWeather;
