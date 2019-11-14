import { IPostsState } from './posts/state';
import { ILoginState } from './login/state';
/* new-imported-state-goes-here */

export interface IStoreState {
  readonly posts: IPostsState;
  readonly login: ILoginState;
	/* new-imported-state-key-goes-here */
}
