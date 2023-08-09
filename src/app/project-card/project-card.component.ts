import { Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { OpacityIn } from '../animations/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [ OpacityIn(400)]
})
export class ProjectCardComponent {
  @Input() project!: Project;

  modalState = false;

  openModal(){
    this.modalState = true;
  }

  closeModal() {
    this.modalState = false;
  }

  isModalOpen(): boolean {
    return this.modalState;
  }
}
