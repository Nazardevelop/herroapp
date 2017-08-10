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
  heroes: Hero[];
selectedHero: Hero;
constructor(private heroService:HeroServiceService){
  
}
getHeroes ():void {
  this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}
onSelect(hero:Hero):void{
  this.selectedHero = hero;
}
  title = 'Tour of Heroes';
  ngOnInit():void {
    this.getHeroes();
  }
}
