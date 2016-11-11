import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssetDetailsComponent } from './components/assetDetails/assetDetails.component';
import { AssetDetailsOverviewComponent } from './components/assetDetailsOverview/assetDetailsOverview.component';
import { AssetDetailsHistoryComponent } from './components/assetDetailsHistory/assetDetailsHistory.component';
import { AssetDetailsCommentsComponent } from './components/assetDetailsComments/assetDetailsComments.component';
import { AssetSearchComponent } from './components/asset-search/asset-search.component';

@NgModule({
  declarations: [
    AppComponent, AssetDetailsComponent, AssetDetailsOverviewComponent, AssetDetailsHistoryComponent, AssetDetailsCommentsComponent, AssetSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
