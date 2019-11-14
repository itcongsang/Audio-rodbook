import { createSelector } from 'reselect';
import { IStoreState } from '../storeState';
import {
  LoginErrable,
  LoginBooleanable,
  LoginSuccessible,
} from './state';

export const loginState = () => (state: IStoreState) => state.login;

//#region Doables
/**
 * Returns true if the evaluation of a booleanable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectLoginBooleanableState = (key: LoginBooleanable | LoginBooleanable[]) =>
createSelector(
  loginState(),
  ({ booleanable }) => (Array.isArray(key) ? !!key.filter(k => booleanable[k]).length : booleanable[key])
);

/**
 * Returns the errable state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectLoginErrableState = (key: LoginErrable | LoginErrable[]) =>
createSelector(
  loginState(),
  ({ errable }) => (Array.isArray(key) ? !!key.filter(k => errable[k]).length : errable[key])
);

/**
 * Returns the successible state of a given key(s) is true
 * @param key the key to compare to
 */
export const selectLoginSuccessibleState = (key: LoginSuccessible | LoginSuccessible[]) =>
createSelector(
  loginState(),
  ({ successible }) => (Array.isArray(key) ? !!key.filter(k => successible[k]).length : successible[key])
);
//#endregion