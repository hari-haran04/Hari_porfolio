import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {

  isChecked : boolean = false;
  isInput : boolean = true;

  onClick(){
    this.isChecked = !this.isChecked;
  }

  showField(){
    this.isInput = true;
  }

  hideField(){
    this.isInput = false;
  }
}
