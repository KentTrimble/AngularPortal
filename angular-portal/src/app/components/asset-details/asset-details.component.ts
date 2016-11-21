import { Component, OnInit } from '@angular/core';
import { AssetListModel } from '../../models/asset';
import { AssetService } from '../../services/asset.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
  providers: [ AssetService ]
})

export class AssetDetailsComponent implements OnInit {

  private objAsset: AssetListModel;
  private objAssetService: AssetService;

  private guidAsset:string;

  constructor(objAssetService: AssetService, private objActivatedRoute: ActivatedRoute) { 
    this.objAssetService = objAssetService;
  }

  ngOnInit() {
    this.objActivatedRoute.params.subscribe((param) => { this.guidAsset = param["id"] });
    this.objAsset = this.objAssetService.getAsset(this.guidAsset);
  }

}
