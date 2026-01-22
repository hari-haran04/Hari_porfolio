import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume() {
    // Implement resume download logic
    const link = document.createElement('a');
    link.href = 'assets/Hariharan_N_Resume.pdf'; // Assuming file exists
    link.download = 'Hariharan_N_Resume.pdf';
    link.click();
  }
}
