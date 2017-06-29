System.register(["@angular/router", "./components/template1/template1.component", "./components/template2/template2.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, template1_component_1, template2_component_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (template1_component_1_1) {
                template1_component_1 = template1_component_1_1;
            },
            function (template2_component_1_1) {
                template2_component_1 = template2_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: 'template1', pathMatch: 'full' },
                { path: 'template1', component: template1_component_1.Template1Component, data: { title: 'TaskList' } },
                { path: 'template2', component: template2_component_1.Template2Component, data: { title: 'About' } }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
