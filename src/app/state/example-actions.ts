import { createAction, props } from '@ngrx/store';
import { User } from '../domain/user';


export const loadUsers = createAction(
  '[Example] Load Users');

export const loadUsersSuccess = createAction(
  '[Example] Load Users Success',
  props<{ users: Array<User> }>());

export const loadUsersFail = createAction(
  '[Example] Load Users Fail');