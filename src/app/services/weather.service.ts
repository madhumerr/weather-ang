import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  dcity:string=''
  city:string=''
  temp_c:string=''

  constructor() { }

  checkWeather(city:string){

    fetch(`https://api.weatherapi.com/v1/current.json?key=412b492bf8de4497ae193119252801&q=${this.city}`)
    .then((response)=>response.json())
    
    .then((data)=>{
      console.log(data)
      this.temp_c="Temperature"+data.current.temp_c;
    })
    
  }
}
