import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExampleState } from './example-state';


const selectExampleState = createFeatureSelector<ExampleState>('example');

export const selectUsers = createSelector(
  selectExampleState,
  state => state.users || []);

export const selectUsersLoadingState = createSelector(
  selectExampleState,
  state => state.usersLoadingState);

// derived/computed state
export const selectNumberOfUsers = createSelector(
  selectUsers,
  users => users.length);