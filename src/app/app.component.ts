import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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