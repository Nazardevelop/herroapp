import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/Hero';
import {HeroServiceService} from '../hero-service.service';
@Component({
  selector: 'dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  heroes:Hero[] = [];
  constructor(private heroService:HeroServiceService) {

   }

  ngOnInit():void {
    this.heroService.getHeroes().then(heroes=> this.heroes = heroes.slice(1,5));
  }

}
