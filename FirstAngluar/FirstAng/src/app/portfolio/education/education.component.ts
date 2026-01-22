import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = [
    {
      institution: 'PSG Institute of Technology and Applied Research',
      degree: 'B.Tech CSBS',
      score: 'CGPA 8.8',
      year: '2022 - 2026',
      icon: 'fas fa-graduation-cap'
    },
    {
      institution: 'Amala Annai Matric Hr Sec School',
      degree: 'Higher Secondary',
      score: '12th: 569/600 | 10th: 436/500',
      year: '2008 - 2022',
      icon: 'fas fa-school'
    }
  ];
}
