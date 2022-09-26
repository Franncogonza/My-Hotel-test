import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  vistaMobile$: BehaviorSubject<any> = new BehaviorSubject(false);

  urlRequest__one = 'https://jsonplaceholder.typicode.com/users';
  urlRequest = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.getDataContent<string>(`${this.urlRequest}`);
  }

  private getDataContent<T>(resource: string) {
    return this.http.get(resource);
  }

  customerEdit(customerId: number, body: any) {
    return this.http.put(`${this.urlRequest}/${customerId}`, body)
      .pipe(map((responsePost: any) => responsePost));
  }
}
