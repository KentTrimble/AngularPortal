import { Component, OnInit } from '@angular/core';
import { SearchFilters } from './../../models/SearchFilters';

@Component({
  selector: 'asset-search-filter-dropdown',
  templateUrl: './asset-search-filter-dropdown.component.html',
  styleUrls: ['./asset-search-filter-dropdown.component.css']
})
export class AssetSearchFilterDropdownComponent implements OnInit {

  public t: any =  {a:1, b:2};
  public SearchFilters: SearchFilters;

  constructor() { }

  ngOnInit() {
    this.SearchFilters = SearchFilters.CreateDummyData();
    console.log(JSON.stringify(this.SearchFilters));
  }

}
