"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
require("rxjs/add/operator/map");
require("rxjs/add/observable/timer");
require("rxjs/add/operator/toPromise");
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map