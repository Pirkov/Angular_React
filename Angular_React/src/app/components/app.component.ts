import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme: string = 'Light';
  isTitleBold: boolean = true;
  title = 'Homework-2';
  text1 = 'Найільший автомобіль';
  text2 = 'Найільший ліак';
  text3 = 'Найільший корабель';

  text4 = 'Text for Belaz';
  text5 = 'Text for Antonov';
  text6 = 'Text for Ship';
  selectedArticleId: string = 'belaz'; // ID выбранной статьи

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme') || 'Light';
    } else {
      localStorage.setItem('theme', 'Light');
    }
    document.getElementsByTagName('body')[0].setAttribute('theme', this.theme);
  }
}
