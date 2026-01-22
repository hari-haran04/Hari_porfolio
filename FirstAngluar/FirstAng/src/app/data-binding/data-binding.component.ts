import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name : string = "haru";
  topic : string = "Hwllo";
  image : string = "https://yt3.googleusercontent.com/vDRk9yJj6aeYBq_1fa66x-QayYqsW3XS6xG-yFVODBQyEFVY5YigauGG8ibCgALGoYvdvWek7hk=s160-c-k-c0x00ffffff-no-rj";
  random = "";
  onSave(){
    alert("Data Saved Successfully.");
  }

  onChange(){
    alert("Country changes.");
  }
}
