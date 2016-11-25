import { Component, OnInit } from '@angular/core';
import { AssetListModel } from '../../models/asset';
import { AssetService } from '../../services/asset.service';
import { Router } from '@angular/router';
import { AssetSearchParametersComponent } from './../asset-search-parameters/asset-search-parameters.component';

@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.css'],
  providers: [ AssetService ]
})

export class AssetSearchComponent implements OnInit {

  public assets: Array<AssetListModel>;
  public service: AssetService;
  
  constructor(service: AssetService, private router: Router) {
      this.service = service;
  }

  ngOnInit() {
      this.assets = this.service.getAssetList()
  }

  onAssetSelection(selectedAsset:AssetListModel) {
    this.router.navigate(['/AssetDetail', selectedAsset.Code]);
  }

}
