import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Weather } from '../model/weather.model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: FormGroup;
  allWeatherData: any;
  temp: any;
  weatherImg: any;
  currentTemp: any;
  weatherImgUrl: any;
  constructor(private formBuilder: FormBuilder, private service: WeatherService, private http: HttpClient) {
    this.weatherData = formBuilder.group({
      location: ['']
    })
  }

  ngOnInit(): void {
    this.service.weatherApiData().subscribe((res) => {
      this.allWeatherData = res;
      this.temp = this.allWeatherData.main.temp - 273;
      for (const imgData of this.allWeatherData.weather) {
        this.weatherImg = imgData.main
        console.log(this.weatherImg);
        if (this.weatherImg === 'Clouds') {
          this.weatherImgUrl = "http://media.bom.gov.au/social/upload/images/19April.jpg"
        } else if(this.weatherImg==='Mist'){
          this.weatherImgUrl="https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        }  else if(this.weatherImg==='Haze')
        {
          this.weatherImgUrl="https://i.stack.imgur.com/T9Ewb.jpg"
        }    else if (this.weatherImg === 'Clear') {
          this.weatherImgUrl = "https://media.istockphoto.com/photos/panoramic-view-of-colorful-sunrise-in-mountains-picture-id620951116?k=20&m=620951116&s=612x612&w=0&h=J98krM_DhMkVpAzPOxfgT15jAD8PWQrtdrQftyxHjbE="
        // https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
}   else if(this.weatherImg === 'Smoke'){
  this.weatherImgUrl="https://c0.wallpaperflare.com/preview/992/147/619/weather-smoke-smog-pollution.jpg"
}

      }
    
      // this.weatherImg=this.allWeatherData.weather.main

      // console.log(this.currentTemp);

      // console.log(res);
      // console.log(this.allWeatherData);


    })
  }
  getweatherData({ value }: { value: Weather }) {

    //  this.service.postWeatherData(value.location).subscribe((resp)=>{
    //     console.log(resp);

    //  })
    this.http.post(`https://api.openweathermap.org/data/2.5/weather?q=${value.location}&appid=19d92a8a8be903a06d684f8a5cc7115f`, value.location).subscribe((resp: any) => {
      // this.allWeatherData=resp;  
      console.log(resp);
      this.temp = this.allWeatherData.main.temp - 273;
      this.allWeatherData = resp;
      for (const imgData of this.allWeatherData.weather) {
        this.weatherImg = imgData.main
        console.log(this.weatherImg);
        if (this.weatherImg === 'Clouds') {
          this.weatherImgUrl = "http://media.bom.gov.au/social/upload/images/19April.jpg"
        } else if(this.weatherImg==='Mist'){
          this.weatherImgUrl="https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        }  else if(this.weatherImg==='Haze')
        {
          this.weatherImgUrl="https://i.stack.imgur.com/T9Ewb.jpg"
        }    else   if (this.weatherImg === 'Clear') {
          this.weatherImgUrl = "https://media.istockphoto.com/photos/panoramic-view-of-colorful-sunrise-in-mountains-picture-id620951116?k=20&m=620951116&s=612x612&w=0&h=J98krM_DhMkVpAzPOxfgT15jAD8PWQrtdrQftyxHjbE="
        // https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
}
      }
    })

  }
}
