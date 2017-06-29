import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {Template1Component} from "./components/template1/template1.component";
import {Template2Component} from "./components/template2/template2.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'template1', pathMatch: 'full'},
    {path: 'template1', component: Template1Component, data: {title: 'TaskList'}},
    {path: 'template2', component: Template2Component, data: {title: 'About'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
