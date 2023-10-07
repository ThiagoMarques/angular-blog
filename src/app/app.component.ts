import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet, provideRouter } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuBarComponent
  ],
  styles:[ 
  `
  header {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1.5em;
  }
  `],
  template: 
  `
  <header>
    <app-menu-bar></app-menu-bar>
</header>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

