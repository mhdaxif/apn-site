import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router'; 
import { filter, map } from 'rxjs';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showSlider = false;
  constructor(private router: Router){
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => {
        // console.log(e.url)

        this.showSlider = e.url === "/home" ||  e.url === "/"; 
      })
    ).subscribe();
  }
  title = 'apn-site'; 
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const navbar = document.getElementById('mainNav');
      if (window.pageYOffset > 80) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    }
  }