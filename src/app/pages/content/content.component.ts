import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  private id: string | null = ''
  
  titleContent: string = 'Title';
  content: string = 'Teste'
  photoCover: string = 'assets/img/test.png'

  constructor(
    private route: ActivatedRoute
  ) {}


  
  ngOnInit() {
    this.route.paramMap.subscribe(val => 
      this.id = val.get("id")
    )
  }
}
