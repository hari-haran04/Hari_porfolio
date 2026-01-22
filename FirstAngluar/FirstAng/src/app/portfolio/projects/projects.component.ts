import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Boltmart',
      description: 'NFC based smart shopping checkout system. Patent published.',
      tech: 'Flutter, Spring Boot',
      highlight: 'Patent Published',
      link: 'https://github.com/hari-haran04/Boltmart' // Placeholder
    },
    {
      name: 'Easy Klant',
      description: 'Developed for help small business owners retain customers, improve engagement, and build long-term trust using data-driven insights, IoT integration, and intelligent analytics.',
      tech: 'Flutter, Spring Boot',
      highlight: 'Real-time Monitoring',
      link: 'https://github.com/hari-haran04/Easy_klant'
    },
    {
      name: 'E-Commerce ',
      description: 'Developed a Microservices System for Ecoomerce Application.',
      tech: 'Spring Boot',
      highlight: 'Microservice Architecture',
      link: 'https://github.com/hari-haran04/e-commerce'
    }
  ];
}
