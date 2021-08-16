import { LoadingState } from '../domain/loadingState';
import { User } from '../domain/user';

export interface ExampleState {
  users: Array<User>;
  usersLoadingState: LoadingState;
}

export const initialExampleState: ExampleState = {
  users: null,
  usersLoadingState: LoadingState.INITIAL
}