System.register(["@angular/http", "@angular/platform-browser", "@angular/core", "@ngx-translate/core", "@ngx-translate/http-loader", "./app.routing", "@angular/forms", "./app.component", "./components/template1/template1.component", "./components/template2/template2.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function HttpLoaderFactory(http) {
        return new http_loader_1.TranslateHttpLoader(http, "i18n/", ".json");
    }
    exports_1("HttpLoaderFactory", HttpLoaderFactory);
    var http_1, platform_browser_1, core_1, core_2, http_loader_1, app_routing_1, forms_1, app_component_1, template1_component_1, template2_component_1, AppModule;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (http_loader_1_1) {
                http_loader_1 = http_loader_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (template1_component_1_1) {
                template1_component_1 = template1_component_1_1;
            },
            function (template2_component_1_1) {
                template2_component_1 = template2_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            app_routing_1.routing,
                            core_2.TranslateModule.forRoot({
                                loader: {
                                    provide: core_2.TranslateLoader,
                                    useFactory: HttpLoaderFactory,
                                    deps: [http_1.Http]
                                }
                            })
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            template1_component_1.Template1Component,
                            template2_component_1.Template2Component,
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=app.module.js.map
