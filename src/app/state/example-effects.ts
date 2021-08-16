import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ExampleState } from './example-state';
import { ExampleService } from '../services/example-service.service';
import * as exampleActions from './example-actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ExampleEffects {

  constructor(
    private actions$: Actions,
    private store: Store<ExampleState>,
    private exampleService: ExampleService
  ) { }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(exampleActions.loadUsers),
      switchMap(() => 
        this.exampleService.loadUsers().pipe(
          map(users => exampleActions.loadUsersSuccess({ users })),
          catchError(error => of(exampleActions.loadUsersFail()))
        ))
    ))
}