import { Component } from '@angular/core';
import { menu } from '@config';
import { menuAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [menuAnimation]
})
export class NavigationComponent {
  menu = menu
}
