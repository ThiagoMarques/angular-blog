import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  @Input() id: string = '';
  @Input() imagePath: string = '';
  @Input() title: string = ''
  @Input() content: string = ''
}
