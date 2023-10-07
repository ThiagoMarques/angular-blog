import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from 'src/app/components/menu-title/menu-title.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
