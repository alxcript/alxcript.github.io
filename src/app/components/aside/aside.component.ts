import { Component, Input } from '@angular/core';
import { socialMedia } from '@config';
import { OpacityIn } from 'src/app/animations/animations';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  animations: [OpacityIn(300)]
})
export class AsideComponent {
  @Input({required: true}) orientation!: 'left' | 'right';
  
  socialMedia = socialMedia
}
