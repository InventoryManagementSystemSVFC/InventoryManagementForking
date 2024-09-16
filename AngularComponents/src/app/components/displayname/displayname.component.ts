import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {

  name: string = "";

  isVisible: boolean = false;

  submitName() { 

    this.isVisible = true;
    
  }


}