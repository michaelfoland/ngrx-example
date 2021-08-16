import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../domain/user';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }

  public loadUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`https://jsonplaceholder.typicode.com/users`).pipe(
      delay(1000) // The endpoint responds super fast, so I'm adding a 1 second delay to make things a bit clearer
    );
  }
}
