import { 
  DEFAULT_ACTION,
  RESET_LOGIN_DOABLES,
  TOGGLE_LOGIN_BOOLEANABLE_STATE,
  TOGGLE_LOGIN_ERRABLE_STATE,
  TOGGLE_LOGIN_SUCCESSIBLE_STATE,
  /* new-constant-import-goes-here */
} from './constants';

import { ILoginState } from './state';
import { reducerPayloadDoableHelper } from 'redux-store/rootReducer';

const initialState: ILoginState = {
  errable: {},
  booleanable: {},
  successible: {},
};

export default (
  state: ILoginState = initialState,
  { type, payload: incomingPayload }: ReduxActions.Action<ILoginState>
) => {
  const payload =
    type === RESET_LOGIN_DOABLES
      ? incomingPayload
      : (reducerPayloadDoableHelper(state, incomingPayload) as ILoginState);

  switch (type) {
    case TOGGLE_LOGIN_BOOLEANABLE_STATE:
    case TOGGLE_LOGIN_ERRABLE_STATE:
    case TOGGLE_LOGIN_SUCCESSIBLE_STATE:
    /* new-constant-cases-go-here */
    case DEFAULT_ACTION:
      return {
        ...state, 
        ...payload,
      }
    default:
      return state;
  }
};

