import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchMode = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.searchMode = params.searchMode;
      console.log(this.searchMode);
    })

   }

  ngOnInit(): void {
  }

}
