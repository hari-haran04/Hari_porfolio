import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DirectiveComponent, RouterOutlet, PortfolioComponent, DataBindingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FirstAng';
}
