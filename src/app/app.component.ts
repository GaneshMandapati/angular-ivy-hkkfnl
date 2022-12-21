import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Ganesh';
  count: number = 5;
  gender: string = 'male';
  amount: number = 7.5;
  currentDate: number = Date.now();

  locales: Locale[] = [
    { localeCode: 'en-US', label: 'English' },
    { localeCode: 'fr', label: 'Français' },
  ];
}

interface Locale {
  localeCode: string;
  label: string;
}
