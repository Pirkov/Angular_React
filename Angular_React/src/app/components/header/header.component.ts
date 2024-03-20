import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() titleHeader = '';
  //Зміна теми
  @Input() theme = 'Light';
  @Input() text1 = 'Найільший автомобіль';
  @Input() text2 = 'Найільший літак';
  @Input() text3 = 'Найільший корабель';
  @Output() themeChange = new EventEmitter<string>();

  color = 'red'
  logo1 = 'Logo1'
  logo2 = 'Logo2'
  menu = [
    {title: 'Link1', href: '/'},
    {title: 'Link2', href: '/about'},
    {title: 'Link3', href: '/contacts'},
  ]

  changeLogo() {
    if (this.logo1 === 'Logo1') {
      this.color = 'blue'
      this.logo1 = this.logo2
    } else {
      this.color = 'red'
      this.logo1 = 'Logo1'
    }
  }

  changeTheme() {
    if (this.theme === 'Light') {
      this.theme = 'Dark'
    } else {
      this.theme = 'Light'
    }
    this.themeChange.emit(this.theme);
    localStorage.setItem('theme', this.theme);
    document.getElementsByTagName('body')[0].setAttribute('theme', this.theme);
  }


  @Input() selectedArticleId: string = ''; // ID выбранной статьи
  @Output() selectedArticleIdChange = new EventEmitter<string>();

  changeArticle(articleId: string) {
    this.selectedArticleId = articleId;
    console.log(articleId)
    this.selectedArticleIdChange.emit(this.selectedArticleId);
  }
}
