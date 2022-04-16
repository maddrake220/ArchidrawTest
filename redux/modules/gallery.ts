import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getRenderings } from "../../service/api";

export const GET_GALLERY_START = "gallery/GET_GALLERY_START";
export const GET_GALLERY_SUCCESS = "gallery/GET_GALLERY_SUCCESS";
export const GET_GALLERY_FAIL = "gallery/GET_GALLERY_FAIL";
export const SELECT_GALLERY_ITEM = "gallery/SELECT_GALLERY_ITEM";
export const UNSELECT_GALLERY_ITEM = "gallery/UNSELECT_GALLERY_ITEM";
export const DELETE_GALLERY_ITEMS = "gallery/DELETE_GALLERY_ITEMS";
export const DELETE_GALLERY_ITEM = "gallery/DELETE_GALLERY_ITEM";
export const DELETE_ALL_SELECT_GALLERY_ITEM =
  "gallery/DELETE_ALL_SELECT_GALLERY_ITEM";

export const SELECT_ALL_GALLERY_ITEM = "gallery/SELECT_ALL_GALLERY_ITEM";
export const UNSELECT_ALL_GALLERY_ITEM = "gallery/UNSELECT_ALL_GALLERY_ITEM";

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

export const deleteAllSelectGalleryItem = () => ({
  type: DELETE_ALL_SELECT_GALLERY_ITEM,
});

export const deleteGalleryItems = (data: string[]) => ({
  type: DELETE_GALLERY_ITEMS,
  data,
});

export const deleteGalleryItem = (_id: string) => ({
  type: DELETE_GALLERY_ITEM,
  _id,
});

export const selectAllGalleryItem = () => ({
  type: SELECT_ALL_GALLERY_ITEM,
});

export const unselectAllGalleryItem = () => ({
  type: UNSELECT_ALL_GALLERY_ITEM,
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
      const res = await getRenderings();
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
    case DELETE_ALL_SELECT_GALLERY_ITEM: {
      return { ...state, selectedItem: [] };
    }
    case DELETE_GALLERY_ITEM: {
      if (state.data !== null) {
        const filtered = state.data?.filter((item) => item._id !== action._id);
        if (state.selectedItem !== null) {
          const filteredSelected = state.selectedItem?.filter(
            (item) => item !== action._id
          );
          return { ...state, data: filtered, selectedItem: filteredSelected };
        }
      }
      return { ...state };
    }
    case DELETE_GALLERY_ITEMS: {
      if (state.data !== null) {
        const filtered = state.data?.filter(
          (item) => !action.data.includes(item._id)
        );
        return { ...state, data: filtered, selectedItem: [] };
      }
      return { ...state };
    }
    case SELECT_ALL_GALLERY_ITEM: {
      if (state.data !== null) {
        return { ...state, selectedItem: state.data?.map((item) => item._id) };
      }
      return { ...state };
    }
    case UNSELECT_ALL_GALLERY_ITEM: {
      return { ...state, selectedItem: [] };
    }
    default:
      return state;
  }
};

export default reducer;
