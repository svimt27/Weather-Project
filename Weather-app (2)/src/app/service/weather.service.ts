import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApi:any='https://api.openweathermap.org/data/2.5/weather?q=mathura&appid=19d92a8a8be903a06d684f8a5cc7115f';

  constructor(private http:HttpClient) { }
  weatherApiData()
  {
    return this.http.get(`${this.weatherApi}`)
  }
  postWeatherData(data:any)
  {
    // return this.http.post(`https://api.openweathermap.org/data/2.5/weather?q=${data.location}&appid=19d92a8a8be903a06d684f8a5cc7115f`,data)
  }
}
