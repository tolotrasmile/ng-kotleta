import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserService {

  private baseUrl: String = 'https://jsonplaceholder.typicode.com'

  constructor (private http: HttpClient) {
  }

  private cars = ['Ford', 'Chevrolet', 'Buick']

  getUsers () {
    this.http.get(this.baseUrl + '/users').subscribe(value => console.log(value))
  }

}
