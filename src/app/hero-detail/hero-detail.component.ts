import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {HeroServiceService} from '../hero-service.service';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;

  constructor(
    private heroService: HeroServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  goBack(): void {
    this.location.back();
  }
  ngOnInit():void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

}
