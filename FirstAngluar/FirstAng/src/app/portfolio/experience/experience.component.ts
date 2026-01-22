import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Developer Intern',
      company: 'C1X AdTech Pvt Ltd',
      location: 'Chennai',
      duration: 'Summer 2024',
      description: [
        'Developed CDMP platform',
        'Integrated MLflow for customer behavior analysis',
        'Generated actionable insights'
      ],
      tech: ['AngularJS', 'NestJS']
    }
  ];
}
