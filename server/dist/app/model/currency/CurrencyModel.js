"use strict";
class CurrencyModel {
    constructor(currencyModel) {
        this.currencyModel = currencyModel;
        this._currencyModel = currencyModel;
    }
    get id() {
        return this._currencyModel._id;
    }
    get name() {
        return this._currencyModel.name;
    }
    get code() {
        return this._currencyModel.code;
    }
}
Object.seal(CurrencyModel);
module.exports = CurrencyModel;
//# sourceMappingURL=CurrencyModel.js.map