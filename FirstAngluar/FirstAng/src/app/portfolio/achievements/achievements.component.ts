import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements = [
    { title: 'Patent Published – Boltmart', icon: 'fas fa-scroll' },
    { title: 'Regional Hackathon – 3rd Place', icon: 'fas fa-trophy' },
    { title: 'Itech Ideathon – Finalist', icon: 'fas fa-lightbulb' },
    { title: 'Project Expo – 2nd Place', icon: 'fas fa-medal' },
    { title: 'Security Vulnerability reported to PSG', icon: 'fas fa-bug' },
    { title: '300+ Leetcode problems', icon: 'fas fa-code' },
    { title: 'Class Representative', icon: 'fas fa-users' }
  ];
}
