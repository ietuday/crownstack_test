import express = require('express');

import IBaseController = require('../interfaces/base');
import CurrencyBusiness = require('../../app/business/currency/CurrencyBusiness')
import ICurrencyModel = require('../../app/model/interfaces/CurrencyModel');
import { IResponseFormat } from '../interfaces/common/ResponseFormat';
import Utility from '../_helper/utility';


class CurrencyController implements IBaseController<CurrencyBusiness>{
    private _responseFormat: IResponseFormat;

    /**
     * 
     * @description Api for creating new currency
     * @param request 
     * @param response 
     */
    create(request: express.Request, response: express.Response): void {
        try {
            const currency: ICurrencyModel = <ICurrencyModel>request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.create(currency, (error, result) => {
                
                error
                 ? 
                    response.status(500).send(Utility.generateResponse(404, error, false, null))
                 :
                    response.status(200).send(Utility.generateResponse(200, `Successfully Created`, true, result));
                    
            })
        } catch (error) {
            response.status(500).send(Utility.generateResponse(404, error, false, null))
        }

    }

    
    /**
     * @description Api for Update a currency
     * @param request 
     * @param response 
     */
    update(request: express.Request, response: express.Response): void {
        try {
            const {id, data} = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.update(id, data, (error, result) => {
                error
                 ? 
                    response.status(500).send(Utility.generateResponse(404, error, false, null))
                 :
                    response.status(200).send(Utility.generateResponse(200, `Successfully Updated`, true, result));
                    
            })
        } catch (error) {
            response.status(500).send(Utility.generateResponse(404, error, false, null))
        }
    }


    /**
     * 
     * @description Api for getting all currencies
     * @param request 
     * @param response 
     */
    retrieve(request: express.Request, response: express.Response): void {
        try {
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.retrieve((error, result) => {
                error
                 ? 
                    response.status(500).send(Utility.generateResponse(404, error, false, null))
                 :
                    response.status(200).send(Utility.generateResponse(200, `All Currency`, true, result));
                    
            })
        } catch (error) {
            response.status(500).send(Utility.generateResponse(404, error, false, null))
        }
    }

    /**
     * @description Api for delete a currency
     * @param request 
     * @param response 
     */
    delete(request: express.Request, response: express.Response): void {
        try {
            const {id} = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.delete(id, (error, result) => {
                error
                 ? 
                    response.status(500).send(Utility.generateResponse(404, error, false, null))
                 :
                    response.status(200).send(Utility.generateResponse(200, `Successfully Deleted`, true, result));
                    
            })
        } catch (error) {
            response.status(500).send(Utility.generateResponse(404, error, false, null))
        }
    }

    /**
     * @description Api for find a currency
     * @param request 
     * @param response 
     */
    findById(request: express.Request, response: express.Response): void {
        try {
            const {id} = request.body;
            const currencyBusiness = new CurrencyBusiness();
            currencyBusiness.findById(id, (error, result) => {
                error
                 ? 
                    response.status(500).send(Utility.generateResponse(404, error, false, null))
                 :
                    response.status(200).send(Utility.generateResponse(200, `Successfully get by Id`, true, result));
                    
            })
        } catch (error) {
            response.status(500).send(Utility.generateResponse(404, error, false, null))
        }
    }
    

}
export = CurrencyController;
