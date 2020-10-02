"use strict";
const CurrencyBusiness = require("../../app/business/currency/CurrencyBusiness");
const utility_1 = require("../_helper/utility");
class CurrencyController {
    /**
     *
     * @description Api for creating new currency
     * @param request
     * @param response
     */
    create(request, response) {
        try {
            const currency = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.create(currency, (error, result) => {
                error
                    ?
                        response.status(500).send(utility_1.default.generateResponse(404, error, false, null))
                    :
                        response.status(200).send(utility_1.default.generateResponse(200, `Successfully Created`, true, result));
            });
        }
        catch (error) {
            response.status(500).send(utility_1.default.generateResponse(404, error, false, null));
        }
    }
    /**
     * @description Api for Update a currency
     * @param request
     * @param response
     */
    update(request, response) {
        try {
            const { id, data } = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.update(id, data, (error, result) => {
                error
                    ?
                        response.status(500).send(utility_1.default.generateResponse(404, error, false, null))
                    :
                        response.status(200).send(utility_1.default.generateResponse(200, `Successfully Updated`, true, result));
            });
        }
        catch (error) {
            response.status(500).send(utility_1.default.generateResponse(404, error, false, null));
        }
    }
    /**
     *
     * @description Api for getting all currencies
     * @param request
     * @param response
     */
    retrieve(request, response) {
        try {
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.retrieve((error, result) => {
                error
                    ?
                        response.status(500).send(utility_1.default.generateResponse(404, error, false, null))
                    :
                        response.status(200).send(utility_1.default.generateResponse(200, `All Currency`, true, result));
            });
        }
        catch (error) {
            response.status(500).send(utility_1.default.generateResponse(404, error, false, null));
        }
    }
    /**
     * @description Api for delete a currency
     * @param request
     * @param response
     */
    delete(request, response) {
        try {
            const { id } = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.delete(id, (error, result) => {
                error
                    ?
                        response.status(500).send(utility_1.default.generateResponse(404, error, false, null))
                    :
                        response.status(200).send(utility_1.default.generateResponse(200, `Successfully Deleted`, true, result));
            });
        }
        catch (error) {
            response.status(500).send(utility_1.default.generateResponse(404, error, false, null));
        }
    }
    /**
     * @description Api for find a currency
     * @param request
     * @param response
     */
    findById(request, response) {
        try {
            const { id } = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.findById(id, (error, result) => {
                error
                    ?
                        response.status(500).send(utility_1.default.generateResponse(404, error, false, null))
                    :
                        response.status(200).send(utility_1.default.generateResponse(200, `Successfully get by Id`, true, result));
            });
        }
        catch (error) {
            response.status(500).send(utility_1.default.generateResponse(404, error, false, null));
        }
    }
}
module.exports = CurrencyController;
//# sourceMappingURL=CurrencyController.js.map