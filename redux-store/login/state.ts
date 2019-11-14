export type LoginErrable =
  | '__errable__' // Remove this. It's just a placeholder
  /* new-errable-goes-here */;

export type LoginBooleanable =
  | '__booleanable__' // Remove this. It's just a placeholder
  /* new-booleanable-goes-here */;

export type LoginSuccessible =
  | '__successible__' // Remove this. It's just a placeholder
  /* new-successible-goes-here */;

export interface ILoginState{

  //#region Doables
  readonly errable?: { [key in LoginErrable]?: string };
  readonly booleanable?: { [key in LoginBooleanable]?: boolean };
  readonly successible?: { [key in LoginSuccessible]?: string };
  //#endregion
}
