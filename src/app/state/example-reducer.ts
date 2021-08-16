import { Action, createReducer, on } from '@ngrx/store';
import { LoadingState } from '../domain/loadingState';
import * as exampleActions from '../state/example-actions';
import { ExampleState, initialExampleState } from './example-state';

const reducer = createReducer(
  initialExampleState,
  on(exampleActions.loadUsers, state => ({
    ...state,
    users: null,
    usersLoadingState: LoadingState.LOADING
  })),
  on(exampleActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    usersLoadingState: LoadingState.SUCCESS
  })),
  on(exampleActions.loadUsersFail, state => ({
    ...state,
    usersLoadingState: LoadingState.FAILURE
  }))
)

export function exampleReducer(state: ExampleState, action: Action): ExampleState {
  return reducer(state, action);
}