import BaseBusiness = require('./base');
import ICurrencyModel = require('../../model/interfaces/CurrencyModel');

interface CurrencyBusiness extends BaseBusiness<ICurrencyModel> {

}
export = CurrencyBusiness;