import express = require('express');

import CurrencyRoutes = require('../currency/CureencyRoutes');

var app = express();
const ApiVersion = '/api/v1'
class BaseRoutes {

    get routes() {
        app.use(`${ApiVersion}/currency`, new CurrencyRoutes().routes);
        return app;
    }
}
export = BaseRoutes;