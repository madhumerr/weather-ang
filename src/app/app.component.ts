import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
  city:string=''
  dcity:string=''
  temp_c:string=''
  wind:string=''
  humidity:string=''
  image:string=''

  setCity(event:any){
    this.city=event.target.value
  }

  checkWeather(){
    this.dcity=this.city;
    fetch(`https://api.weatherapi.com/v1/current.json?key=412b492bf8de4497ae193119252801&q=${this.dcity}`)
    .then((response)=>response.json())
    .then((data)=>{
      //console.log(data.current.temp_c)
      this.image=data.current.condition.icon
      this.temp_c="Temperature is "+data.current.temp_c+" °C"
      this.wind="Wind speed is "+data.current.wind_kph+" km/hr"
      this.humidity="Humidity is "+data.current.humidity+" %"
    })
  }

  constructor(private weather:WeatherService){

  }
  myFun(){
    this.weather.checkWeather(this.city);
  }
}
