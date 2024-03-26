import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lista-Ma.MercedesVergnes';
  hasError = true;
  date = new Date (2024, 2);

  students = [{
    nombre1: 'Mariano', status1: true,
    nombre2: 'Cesar', status2: false,
    nombre3: 'Natalia', status3: true,
    nombre4: 'Santiago', status4: true,
    nombre5: 'Josefina', status5: true
  }];

  viewList = false;


  changeError() {
    this.hasError = !this.hasError;
  }

}
