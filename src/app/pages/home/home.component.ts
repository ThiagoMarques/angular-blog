import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /* Title Blog */
  titleBlog = "Angular Blog"
  /* Big Card */
  bigCardImagePath: string = 'assets/img/placeholder.png';
  bigCardTitle: string = 'Saiu uma nova versão do Angular'
  bigCardContent: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  /* Small Card */
  smallCardData = [
    {
      image: 'assets/img/example.png',
      title: 'Saiu uma nova versão do Angular'
    },
    {
      image: 'assets/img/example.png',
      title: 'Saiu uma nova versão do Angular'
    },
    {
      image: 'assets/img/example.png',
      title: 'Saiu uma nova versão do Angular'
    }
  ]

}
