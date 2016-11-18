import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AssetSearchComponent } from './components/asset-search/asset-search.component'
import { AssetDetailsComponent } from './components/asset-details/asset-details.component'

const appRoutes: Routes = [

    { path: '', component: AssetSearchComponent },
    { path: 'AssetSearch', component: AssetSearchComponent },
    { path: 'AssetDetail/:id', component: AssetDetailsComponent },

    // Wilcard Route - Redirects user to home page
    { path: '**', component: AssetSearchComponent }

];

export const routing = RouterModule.forRoot(appRoutes);