import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { DRIVERS } from '../../db-data';
import { CommonModule } from '@angular/common';
import { Driver } from '../klasa';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit{

  @Input({required: true})
  driver!: Driver;

  @Input({required:true})
  index!:number;

  @Output('driverSelected')
  driverEmitter = new EventEmitter<Driver>();
  
  constructor() {}

  ngOnInit() {}

  cardClasses(){
    return{
      'beginner' : this.driver.category == "BEGGINER",
      'medium' : this.driver.category == "MEDIUM",
      'advanced': this.driver.category == "ADVANCED",
      'max': this.driver.category == "MAX"
    };
  }
  cardStyle(){
    return{
      'background-image' : 'linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.5)), url('+ this.driver.iconUrl+ ')',
    };
  }

  onDriverViewed(){
    var link = this.driver.iconUrl
    window.open(link,"_blank")

    console.log ("Driver image clicked");
    this.driverEmitter.emit(this.driver);
  }

}
