import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  emailAddress?: string;
  password?: string;

  login(){
    console.log('Email: ', this.emailAddress);
    console.log('Password', this.password)
  }
}
