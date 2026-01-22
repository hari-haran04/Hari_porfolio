import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'C', icon: 'fas fa-code' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'C++', icon: 'fas fa-code' } // Using code icon for C/C++
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', icon: 'fas fa-mobile-alt' }, // Generic mobile for Flutter if FA fails
        { name: 'Spring Boot', icon: 'fas fa-leaf' },
        { name: 'Angular', icon: 'fab fa-angular' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fab fa-envira' }
      ]
    },
    {
      title: 'Concepts',
      skills: [
        { name: 'OOPS', icon: 'fas fa-cubes' },
        { name: 'Data Structures', icon: 'fas fa-tree' },
        { name: 'Microservices', icon: 'fas fa-network-wired' },
        { name: 'DevOps', icon: 'fas fa-infinity' },
        { name: 'Software Security', icon: 'fas fa-shield-alt' },
        { name: 'Networks', icon: 'fas fa-globe' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Postman', icon: 'fas fa-paper-plane' }
      ]
    }
  ];
}
