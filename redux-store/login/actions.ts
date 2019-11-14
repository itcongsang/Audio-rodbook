import { createAction } from 'redux-actions';
import {
  DEFAULT_ACTION,
  RESET_LOGIN_DOABLES,
  TOGGLE_LOGIN_BOOLEANABLE_STATE,
  TOGGLE_LOGIN_ERRABLE_STATE,
  TOGGLE_LOGIN_SUCCESSIBLE_STATE,
  /* new-constant-import-goes-here */
} from './constants';
import {
  ILoginState,
  LoginErrable,
  LoginBooleanable,
  LoginSuccessible,
} from './state';

export const defaultAction = createAction<ILoginState>(DEFAULT_ACTION, () => ({
  errable: { __errable__: null },
  booleanable: { __booleanable__: true },
  successible: { __successible__: 'Successfully initialized!' },
}));

//#region Doables
export const resetLoginDoables = createAction<ILoginState>(RESET_LOGIN_DOABLES, () => ({
  errable: {},
  booleanable: {},
  successible: {},
}));

export const toggleLoginBooleanableState = createAction<
  ILoginState,
  { [key in LoginBooleanable]?: boolean }
>(TOGGLE_LOGIN_BOOLEANABLE_STATE, key => ({
  booleanable: key,
}));

export const toggleLoginErrableState = createAction<ILoginState, { [key in LoginErrable]?: string }>(
  TOGGLE_LOGIN_ERRABLE_STATE,
  key => ({
    errable: key,
  })
);

export const toggleLoginSuccessibleState = createAction<
  ILoginState,
  { [key in LoginSuccessible]?: string }
>(TOGGLE_LOGIN_SUCCESSIBLE_STATE, key => ({
  successible: key,
}));
//#endregion

/* new-actions-go-here */