import { Component, OnInit, Input } from '@angular/core';
import { AssetListModel } from '../../models/asset';

@Component({
  selector: 'app-asset-details-overview',
  templateUrl: './asset-details-overview.component.html',
  styleUrls: ['./asset-details-overview.component.css']
})
export class AssetDetailsOverviewComponent implements OnInit {

  @Input() objAssetModel: AssetListModel;

  constructor() { }

  ngOnInit() {
  }

}
