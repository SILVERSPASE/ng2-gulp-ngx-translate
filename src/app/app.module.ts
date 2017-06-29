import {HttpModule, Http} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {Template1Component} from "./components/template1/template1.component";
import {Template2Component} from "./components/template2/template2.component";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "i18n/", ".json");
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    declarations: [
        AppComponent,
        Template1Component,
        Template2Component,
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}