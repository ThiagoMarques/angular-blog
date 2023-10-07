import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss']
})
export class MenuTitleComponent {
  @Input() title: string = ''
}
