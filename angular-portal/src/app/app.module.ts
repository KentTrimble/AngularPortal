import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AssetSearchComponent } from './components/asset-search/asset-search.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { AssetDetailsCommentsComponent } from './components/asset-details-comments/asset-details-comments.component';
import { AssetDetailsHistoryComponent } from './components/asset-details-history/asset-details-history.component';
import { AssetDetailsOverviewComponent } from './components/asset-details-overview/asset-details-overview.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
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
