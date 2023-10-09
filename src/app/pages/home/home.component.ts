import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';
import { dataFake } from 'src/app/data/dataFake';
import { Post } from 'src/app/types/types';

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
  titleBlog = "Angular Blog"
  dataNews: Post[] = dataFake;
}
