import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ExperienceComponent,
        AchievementsComponent,
        EducationComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent { }
