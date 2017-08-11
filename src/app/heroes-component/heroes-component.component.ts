import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroServiceService } from '../hero-service.service'; 
import {Router} from '@angular/router';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.css'],
  providers: [HeroServiceService]
})
export class HeroesComponentComponent implements OnInit {
  heroes: Hero[];
selectedHero: Hero;
  constructor(private heroService:HeroServiceService, 
    private router:Router) { }
 getHeroes ():void {
  this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
}
onSelect(hero:Hero):void{
  this.selectedHero = hero;
}
gotoDetails(){
  this.router.navigate(['/detail', this.selectedHero.id]);
}
  title = 'Tour of Heroes';
  ngOnInit():void {
    this.getHeroes();
  }

}
