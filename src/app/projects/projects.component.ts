import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { FadeInOut } from '../animations/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [FadeInOut(300, 400, false)]
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name:"Alxcript",
      description: "Mi página web personal.",
      url: 'https://alxcript.github.io',
      year: '2023',
      image: '/assets/myapp.png',
      tech: ['Angular']
    },
    {
      name:"Detección de depresión",
      description: "Aplicación web para la detección temprana de la depresión usando inteligencia artificial.",
      url: 'https://depressionapp.azurewebsites.net',
      year: '2023',
      image: '/assets/depresionapp.png',
      tech: ['Flask', 'GPT 3.5', 'OAuth 2.0']
    },
    {
      name:"Operaciones bancarias",
      description: "Aplicación Web para realizar operaciones bancarias.",
      url: 'https://operacionesbancarias.azurewebsites.net',
      year: '2023',
      image: '/assets/operacionesapp.png',
      tech: ['Spring boot', 'Angular', 'Gitpod', 'Stackblitz']
    },
    {
      name:"Gestión de Expedientes",
      description: "Aplicación para al gestión de expedientes de procesos judiciales.",
      image: '/assets/expedientesapp.png',
      year: '2022',
      url: 'https://expedientespp.azurewebsites.net',
      tech: ['Php', 'Bootstrap']
    },
  ];

}
