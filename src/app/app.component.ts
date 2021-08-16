import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleState } from './state/example-state';
import * as exampleActions from './state/example-actions';
import * as fromExample from './state/example-selectors';
import { Observable } from 'rxjs';
import { User } from './domain/user';
import { LoadingState } from './domain/loadingState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users$: Observable<Array<User>> = this.store.select(fromExample.selectUsers);
  usersLoadingState$: Observable<LoadingState> = this.store.select(fromExample.selectUsersLoadingState);
  numberOfUsers$: Observable<number> = this.store.select(fromExample.selectNumberOfUsers);

  constructor(private store: Store<ExampleState>) { }

  loadUsers() {
    this.store.dispatch(exampleActions.loadUsers());
  }
}
