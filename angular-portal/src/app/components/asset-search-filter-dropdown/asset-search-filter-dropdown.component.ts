import { Component, OnInit } from '@angular/core';
import { SearchFilter } from './../../models/SearchFilter';
import { SearchFilters } from './../../models/SearchFilters';

@Component({
  selector: 'asset-search-filter-dropdown',
  templateUrl: './asset-search-filter-dropdown.component.html',
  styleUrls: ['./asset-search-filter-dropdown.component.css']
})
export class AssetSearchFilterDropdownComponent implements OnInit {

  public t: any =  {a:1, b:2};
  public SearchFilters: SearchFilters;
  public SelectedProperty: SearchFilter = null;
  public SelectedPropertyID:string = '*';

  constructor() { }

  ngOnInit() {
    this.SearchFilters = SearchFilters.CreateDummyData();
    console.log(JSON.stringify(this.SearchFilters));
  }

  showValues() {
    return (this.SelectedPropertyID != '*')
  }

  onPropertySelectionChanged(newValue) {
    this.SelectedProperty = this.SearchFilters.Filters.find((value:SearchFilter, index: number, obj: SearchFilter[])=>value.PropertyID == newValue);

    this.SelectedPropertyID = newValue;
  }
}
