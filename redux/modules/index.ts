import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import gallery, { IGalleryState } from "./gallery";

export interface IState {
  gallery: IGalleryState;
}

const rootReducer = (
  state: IState | undefined,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    // 서버 사이드 데이터를 클라이언트 사이드 Store에 통합.
    case HYDRATE:
      return { ...action.payload };
    default: {
      const combineReducer = combineReducers({
        gallery,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
