import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/internal/operators/map';
import { USERS_MOCK } from './mock-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  vistaMobile$: BehaviorSubject<any> = new BehaviorSubject(false);

  urlRequest__one = 'https://jsonplaceholder.typicode.com/users';
  urlRequest = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) { }
  //sentite a gusto de probar la app consumiendo el servicio, lo comente porque al deployarlo y usarlo online me bloquea

  // getCustomers() {
  //   return this.getDataContent<string>(`${this.urlRequest}`);
  // }
  getCustomers() {
    return USERS_MOCK;
  }

  private getDataContent<T>(resource: string) {
    return this.http.get(resource);
  }

  customerEdit(customerId: number, body: any) {
    return this.http.put(`${this.urlRequest}/${customerId}`, body)
      .pipe(map((responsePost: any) => responsePost));
  }

  customerDelete(customerId: number, body: any) {
    return this.http.delete(`${this.urlRequest}/${customerId}`, body)
      .pipe(map((responsePost: any) => responsePost));
  }

  customerAdd(customerId: number, body: any) {
    return this.http.post(`${this.urlRequest}/${customerId}`, body)
      .pipe(map((responsePost: any) => responsePost));
  }
}
