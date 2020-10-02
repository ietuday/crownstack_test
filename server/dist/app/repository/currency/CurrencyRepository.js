"use strict";
const CurrencySchema = require("../../dataAccess/schemas/Currency");
const RepositoryBase = require("../base");
class CurrencyRepository extends RepositoryBase {
    constructor() {
        super(CurrencySchema);
    }
}
Object.seal(CurrencyRepository);
module.exports = CurrencyRepository;
//# sourceMappingURL=CurrencyRepository.js.map