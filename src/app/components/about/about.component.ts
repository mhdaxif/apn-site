import { Component } from '@angular/core';
import { ImageProvider } from '../../image-provider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  mission1 = ImageProvider.getImage().missions1Image;
  missions2Image = ImageProvider.getImage().missions2Image;
  profileImage = ImageProvider.getImage().profileImage;
}
