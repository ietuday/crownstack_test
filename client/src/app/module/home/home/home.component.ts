import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { CurrencyModel } from 'src/app/core/models/currency.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export interface Data {
  currency: string;
  rate: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['currency', 'rate'];
  currencies: CurrencyModel;
  availableRates: Array<Data> = []
  rates;
  dataSource = this.availableRates;
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(  private apiService: ApiService,
    private toastService: ToastService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.currencyList()
  }

  currencyList(){
    this.apiService.request('GET_ALL_CURRENCY').subscribe((result) => {
      if(result.isSuccess && result.data.length > 0) {
        this.currencies = result.data
      }
      else{
        this.toastService.activate('Not able to call all currency api')
      } 
    })
  }

  onCurrencyChange(data) {
    this.getExchangeRate(data.value)
  }

  getExchangeRate(code: string){
    const URL = `https://api.exchangeratesapi.io/latest?base=${code}`;
    this.httpClient.get(URL).subscribe((response) => {
      this.rates = <any>response;
      this.availableRates = this.ratesToArray(this.rates['rates'])
      this.dataSource = this.availableRates;
    })
    
  }

  private ratesToArray(rates: { [key: string]: number }){
    return Object.entries(rates).map((pair: [string, number]) => {
      let currency: string, rate: number;
      [currency, rate] = pair;
      return { currency, rate};
    });
  }
}




