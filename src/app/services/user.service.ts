import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../classes/user'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { Post } from '../classes/post'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class UserService {

  private baseUrl: String = 'https://jsonplaceholder.typicode.com'

  private userSubject = new Subject<User>()
  userSubject$ = this.userSubject.asObservable()

  constructor (private http: HttpClient) {
  }

  getUsers (): Observable<User[]> {
    return this.mapResponse(this.http.get<User[]>(this.baseUrl + '/users'), [])
  }

  getPosts (): Observable<Post[]> {
    return this.mapResponse(this.http.get<Post[]>(this.baseUrl + '/posts'), [])
  }

  getPostsByUser (user: User): Observable<Post[]> {
    return this.mapResponse(this.http.get<Post[]>(this.baseUrl + '/posts?userId=' + user.id), [])
  }

  private mapResponse<T> (response: Observable<T>, defaultValue: Object) {
    return response.map((value: T) => value || defaultValue as T)
  }

  onChangeUser (user: User) {
    this.userSubject.next(user)
  }

}
