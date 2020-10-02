
import CurrencyRepository = require('../../repository/currency/CurrencyRepository');
import ICurrencyBusiness = require('../interfaces/CurrencyBusiness');
import ICurrencyModel = require('../../model/interfaces/CurrencyModel');


class CurrencyBusiness implements ICurrencyBusiness {
    private _CurrencyRepository: CurrencyRepository;
   

    constructor() {
        this._CurrencyRepository = new CurrencyRepository();
    }

    create(user: ICurrencyModel, callback: (error: any, result: any) => void) {
        this._CurrencyRepository.create(user, callback)
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._CurrencyRepository.retrieve(callback);
    }
    delete(_id: string, callback: (error: any, result: any) => void) {
        this._CurrencyRepository.delete(_id,callback)
    }

    update(_id: string, item: ICurrencyModel, callback: (error: any, result: any) => void) {
        this._CurrencyRepository.update(_id, item, callback);
    }
    findById(_id: string, callback: (error: any, result: any) => void) {
        this._CurrencyRepository.findById(_id, callback)
     }
}

Object.seal(CurrencyBusiness);
export = CurrencyBusiness;
