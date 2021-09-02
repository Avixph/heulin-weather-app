import axios from "axios";
import { zipCodeURL, weatherURL, apiKey, zipApiKey } from "./constants";

// export async function fetchWeatherSearch(zipCode) {
//   // const zipCodeAPI = `${zipCodeURL}/${zipApiKey}/info.json/${zipCode}/degrees`;
//   // const zipCodeAPI = `${zipCodeURL}info.json/10039/degrees`;
//   const zipCodeAPI = `https://www.zipcodeapi.com/rest/12a1AXjFJrx5OE36UXjMNxpQrsGwjz71AjCS9B1DteO8xBxjMwGWM2uwRqPl1klj/info.json/10039/degrees`;

//   // const locations = await axios.get(zipCodeAPI).then(({ data }) => {
//   //   console.log(data.lan);
//   //   return data;
//   // });
//   // console.log(results);

//   const lat = zipCodeAPI.lat;
//   const lon = zipCodeAPI.lng;
//   console.log(zipCodeAPI);

//   const weatherAPI = `${weatherURL}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;

//   const results = await axios.get(weatherAPI).then(({ data }) => {
//     return data;
//   });
//   // console.log(results);
//   return results;
// }

export async function fetchWeatherSearch(zipCode) {
  const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=${apiKey}`;

  const results = await axios.get(weatherAPI).then(({ data }) => {
    console.log(data.list);
    return data;
  });
  // console.log(results);
  return results;
}
