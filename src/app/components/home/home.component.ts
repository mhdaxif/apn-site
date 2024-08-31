import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { HeroComponent } from '../shared/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, HeroComponent, ServicesComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { 

}
