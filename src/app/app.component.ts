import { Component, OnInit } from '@angular/core';
import { Hero } from './models/Hero';
import { HeroServiceService } from './hero-service.service'; 
@Component({
  selector: 'app-root',
 templateUrl:"./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HeroServiceService]
})
export class AppComponent implements OnInit {
  title= 'Tour of Heroes';
constructor(){
  
}

  ngOnInit() {
  }
}
