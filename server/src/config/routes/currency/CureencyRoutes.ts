import express = require('express');

import CurrencyController = require('../../../controllers/currency/CurrencyController');

var router = express.Router();

class CurrencyRoutes {
    private _CurrencyController: CurrencyController;

    constructor() {
        this._CurrencyController = new CurrencyController();
    }

    get routes() {
        var controller = this._CurrencyController;

        router.post("/create", controller.create);
        router.put("/update", controller.update);
        router.delete("/delete", controller.delete);
        router.post("/find-by-id", controller.findById)
        router.get("/all-currency", controller.retrieve);
        return router;
    }
}

Object.seal(CurrencyRoutes);
export = CurrencyRoutes;