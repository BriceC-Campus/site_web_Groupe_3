// Exemple d'appel JS pour récupérer des données météo :
//
import {pointsOfInterest} from "./points-of-interest";

console.log(pointsOfInterest)

fetch("https://api.open-meteo.com/v1/meteofrance?latitude=45.646907&longitude=6.152051&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,pressure_msl,surface_pressure,precipitation,snowfall,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,et0_fao_evapotranspiration,vapor_pressure_deficit,cape,windspeed_10m,winddirection_10m,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto").then((resp) => {
  return resp.json();
}).then((data) => {
  console.log('data: ' + JSON.stringify(data));
});
