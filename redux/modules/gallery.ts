import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchRenderings } from "../../service/api";

export const GET_GALLERY_START = "gallery/GET_GALLERY_START";
export const GET_GALLERY_SUCCESS = "gallery/GET_GALLERY_SUCCESS";
export const GET_GALLERY_FAIL = "gallery/GET_GALLERY_FAIL";
export const SELECT_GALLERY_ITEM = "gallery/SELECT_GALLERY_ITEM";
export const UNSELECT_GALLERY_ITEM = "gallery/UNSELECT_GALLERY_ITEM";

export type ItemType = {
  _id: string;
};

export enum Status {
  "idle" = "idle",
  "loading" = "loading",
  "failed" = "failed",
}
export interface IGalleryState {
  data: ItemType[] | null;
  selectedItem: string[] | null;
  status: Status;
}

const getGalleryStart = () => ({
  type: GET_GALLERY_START,
});

const getGallerySuccess = (data: ItemType[] | null) => ({
  type: GET_GALLERY_SUCCESS,
  data,
});

const getGalleryFail = () => ({
  type: GET_GALLERY_FAIL,
});

export const selectGalleryItem = (_id: string) => ({
  type: SELECT_GALLERY_ITEM,
  _id,
});

export const unSelectGalleryItem = (_id: string) => ({
  type: UNSELECT_GALLERY_ITEM,
  _id,
});

export const initialState: IGalleryState = {
  data: [],
  selectedItem: [],
  status: Status.idle,
};

export function getGalleryThunk(): ThunkAction<
  void,
  IGalleryState,
  null,
  AnyAction
> {
  return async (dispatch) => {
    try {
      dispatch(getGalleryStart());
      const res = await fetchRenderings();
      dispatch(getGallerySuccess(res));
    } catch (error: any) {
      dispatch(getGalleryFail());
    }
  };
}

const reducer = (
  state: IGalleryState = initialState,
  action: AnyAction
): IGalleryState => {
  switch (action.type) {
    case GET_GALLERY_START:
      return { ...state, status: Status.loading };
    case GET_GALLERY_SUCCESS:
      return { ...state, status: Status.idle, data: action.data };
    case GET_GALLERY_FAIL:
      return { ...state, status: Status.failed };
    case SELECT_GALLERY_ITEM: {
      if (state.selectedItem !== null) {
        return { ...state, selectedItem: [...state.selectedItem, action._id] };
      }
      return { ...state, selectedItem: [action._id] };
    }
    case UNSELECT_GALLERY_ITEM: {
      if (state.selectedItem !== null) {
        const selectedItem = state.selectedItem.filter(
          (item) => item !== action._id
        );
        return { ...state, selectedItem };
      }
      return { ...state, selectedItem: [action._id] };
    }
    default:
      return state;
  }
};

export default reducer;
