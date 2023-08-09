import { Component } from '@angular/core';
import { OpacityIn, menuAnimation } from './animations/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [menuAnimation, OpacityIn(800)]
})
export class AppComponent {
  menu = [
    {
      "name": "Inicio",
      "url": "/"
    },
    {
      "name": "Proyectos",
      "url": "/projects"
    }
  ];

}
