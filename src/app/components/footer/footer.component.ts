import { Component } from '@angular/core';
import { socialMedia } from '@config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialMedia = socialMedia
}
