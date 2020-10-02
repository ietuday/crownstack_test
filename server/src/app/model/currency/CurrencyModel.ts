import ICurrencyModel = require('../interfaces/CurrencyModel');

class CurrencyModel {
    private _currencyModel: ICurrencyModel;

    constructor(private currencyModel: ICurrencyModel) {
        this._currencyModel = currencyModel;
    }

    get id(): string {
        return this._currencyModel._id;
    }

    get name(): string {
        return this._currencyModel.name;
    }

    get code(): string {
        return this._currencyModel.code;
    }

}

Object.seal(CurrencyModel);
export = CurrencyModel;