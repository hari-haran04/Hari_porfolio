import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'about', component: DataBindingComponent }
];
