import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  @Input()
  foodPageTags?:string[]

  @Input()
  justifyContent:string='center'

  tags?:Tag[]
  constructor(private foodService:FoodService){}

  ngOnInit(): void{
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags()
  }
}
