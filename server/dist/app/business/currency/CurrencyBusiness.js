"use strict";
const CurrencyRepository = require("../../repository/currency/CurrencyRepository");
class CurrencyBusiness {
    constructor() {
        this._CurrencyRepository = new CurrencyRepository();
    }
    create(user, callback) {
        this._CurrencyRepository.create(user, callback);
    }
    retrieve(callback) {
        this._CurrencyRepository.retrieve(callback);
    }
    delete(_id, callback) {
        this._CurrencyRepository.delete(_id, callback);
    }
    update(_id, item, callback) {
        this._CurrencyRepository.update(_id, item, callback);
    }
    findById(_id, callback) {
        this._CurrencyRepository.findById(_id, callback);
    }
}
Object.seal(CurrencyBusiness);
module.exports = CurrencyBusiness;
//# sourceMappingURL=CurrencyBusiness.js.map