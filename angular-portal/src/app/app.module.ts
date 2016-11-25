import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AssetSearchComponent } from './components/asset-search/asset-search.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { AssetDetailsCommentsComponent } from './components/asset-details-comments/asset-details-comments.component';
import { AssetDetailsHistoryComponent } from './components/asset-details-history/asset-details-history.component';
import { AssetDetailsOverviewComponent } from './components/asset-details-overview/asset-details-overview.component';
import { AssetSearchFilterDropdownComponent } from './components/asset-search-filter-dropdown/asset-search-filter-dropdown.component';
import { AssetSearchParametersComponent } from './components/asset-search-parameters/asset-search-parameters.component';

@NgModule({
  declarations: [
    AppComponent, AssetSearchComponent,AssetDetailsComponent, AssetDetailsCommentsComponent, AssetDetailsHistoryComponent, AssetDetailsOverviewComponent, AssetSearchFilterDropdownComponent, AssetSearchParametersComponent, HeaderComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }


