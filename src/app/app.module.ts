import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import {HeroServiceService} from './hero-service.service';
import { DashBoardComponent } from './dash-board/dash-board.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponentComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
     },
      {
        path:'heroes',
        component:HeroesComponentComponent
      },
      {
        path:'dashboard',
        component:DashBoardComponent
      },
      {
        path:'detail/:id',
        component:HeroDetailComponent
      }
])
  ],
  providers: [HeroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
