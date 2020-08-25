import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;

  constructor(private _articles: ArticlesService) { }

  ngOnInit(): void {
    this._articles.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews)
    })
  }

}
