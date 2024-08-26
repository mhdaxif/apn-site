import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  slides: { image: string, title: string, description: string }[] = [
    { image: 'assets/images/consulatant-1.jpg', title: 'Innovative Solutions', description: 'Delivering cutting-edge solutions to drive success.' },
    { image: 'assets/images/consulatant-2.jpg', title: 'Expert Team', description: 'A team of industry experts committed to excellence.' },
    { image: 'assets/images/consulatant-3.jpg', title: 'Global Reach', description: 'Expanding your business with a global perspective.' },
    { image: 'assets/images/consulatant-1.jpg', title: 'Lasting Solutions', description: 'Delivering cutting-edge solutions to drive success.' },
  ];
  currentIndex = 0;

  isAutoSlide = false;
  ngOnInit(): void {
  }


  previous(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
    this.autoSlide();
  }

  next(): void {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
    this.autoSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  autoSlide(): void {
    if (this.isAutoSlide == false) {
      this.isAutoSlide = true;

      setInterval(() => {
        this.next();
      }, 5000);  // Automatically change slide every 5 seconds
    }
  }
}