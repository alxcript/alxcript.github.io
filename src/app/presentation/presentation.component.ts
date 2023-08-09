import { Component } from '@angular/core';
import { Container, FadeIn, OpacityIn } from '../animations/animations';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  animations: [FadeIn(300, true), OpacityIn(800), Container]
})
export class PresentationComponent {

}
