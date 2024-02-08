import {setDefaults,geocode,RequestType} from "react-geocode";

setDefaults({
  key: "AIzaSyDRE11sP9BuC0OkAcDOMwbQGMOXfMGXPNE", // Your API key here.
  language: "en", // Default language for responses.
  region: "es", // Default region for responses.
});
export async function getGeocodingData(address){
   
  const res = await geocode(RequestType.ADDRESS,address);
  console.log(res);
   return res;
    
}
