import { Injectable } from '@angular/core';
import { Constants } from '../shared/constants';

/**
 * @interface IApiEndpoint
 * @description Interface to provide fixed structure
 */
export interface IApiEndpoint {
  name: string;
  method?: string;
  url: string;
  restfull?: boolean;
}

/**
 *  @enum ApiEndpointType
 *  @description Http methods enum
 */
export enum ApiEndpointType {
  GET, PUT, POST, DELETE
}

/**
 * @class EndpointService
 * @description Service provider for getting api urls and methods for api calling
 */
@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private readonly baseUrl: string = Constants.baseUrl;
  private endpoints: Array<IApiEndpoint> = [];

  constructor() {
    this.init();
  }

  /**
   * @function get
   * @description returns end point for given api name
   * @param- name
   */
  get(name: string): IApiEndpoint {
    const requiredEndpoint = this.endpoints.find((endpoint) => endpoint.name === name);
    if (requiredEndpoint && requiredEndpoint.url.indexOf(this.baseUrl) !== 0) {// check if endpoint url has the baseUrl already.
      requiredEndpoint.url = this.baseUrl + requiredEndpoint.url;
    }

    return requiredEndpoint;
  }

  /**
   * @function init
   * @description Initialize endpoints array
   */
  private init() {
    /**
     * All api's with method. 
     */
    this.endpoints = [
      { name: 'GET_ALL_CURRENCY', url: 'all-currency', method: 'GET' }
    ];
  }
}
