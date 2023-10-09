import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import { Post } from 'src/app/types/types';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  private id: string | null = ''
  
  titleContent: string = '';
  description: string = ''
  photoCover: string = ''
  text: string = ''

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(val => 
      this.id = val.get("id")
    );
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result: Post[] = dataFake.filter(article => article.id === id);

    if (result.length > 0) {
      this.titleContent = result[0].title;
      this.description = result[0].description;
      this.photoCover = result[0].photo;
      this.text = result[0].text;
    }
  }
}
