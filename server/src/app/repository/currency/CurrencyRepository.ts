import ICurrencyModel = require('../../model/interfaces/CurrencyModel');
import CurrencySchema = require('../../dataAccess/schemas/Currency');
import RepositoryBase = require('../base');


class CurrencyRepository extends RepositoryBase<ICurrencyModel>{
    constructor() {
        super(CurrencySchema);
    }
}
Object.seal(CurrencyRepository);
export = CurrencyRepository;
    