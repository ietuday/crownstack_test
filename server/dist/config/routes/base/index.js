"use strict";
const express = require("express");
const CurrencyRoutes = require("../currency/CureencyRoutes");
var app = express();
const ApiVersion = '/api/v1';
class BaseRoutes {
    get routes() {
        app.use(`${ApiVersion}/currency`, new CurrencyRoutes().routes);
        return app;
    }
}
module.exports = BaseRoutes;
//# sourceMappingURL=index.js.map