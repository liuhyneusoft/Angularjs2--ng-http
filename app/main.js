System.register(['angular2/platform/browser', './demof.components', "angular2/http", 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, demof_components_1, http_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demof_components_1_1) {
                demof_components_1 = demof_components_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(demof_components_1.SimpleHTTPComponent, [http_1.HTTP_PROVIDERS]); //在bootstrap这里加入HTTP_PROVIDERS。没加会提示 No provider for Http， DI exception
        }
    }
});
//# sourceMappingURL=main.js.map