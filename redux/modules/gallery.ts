import { ThunkAction } from "redux-thunk";
import { fetchRenderings } from "../../service/api";

export const GET_GALLERY_START = "gallery/GET_GALLERY_START";
export const GET_GALLERY_SUCCESS = "gallery/GET_GALLERY_SUCCESS";
export const GET_GALLERY_FAIL = "gallery/GET_GALLERY_FAIL";

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
  status: Status;
}

const getGalleryStart = () => ({
  type: GET_GALLERY_START,
  payload: null,
});

const getGallerySuccess = (data: ItemType[] | null) => ({
  type: GET_GALLERY_SUCCESS,
  payload: data,
});

const getGalleryFail = () => ({
  type: GET_GALLERY_FAIL,
  payload: null,
});

export type GalleryAction = ReturnType<
  typeof getGalleryStart | typeof getGallerySuccess | typeof getGalleryFail
>;

export const initialState: IGalleryState = {
  data: [],
  status: Status.idle,
};

export function getGalleryThunk(): ThunkAction<
  void,
  IGalleryState,
  null,
  GalleryAction
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
  action: GalleryAction
): IGalleryState => {
  switch (action.type) {
    case GET_GALLERY_START:
      return { ...state, status: Status.loading };
    case GET_GALLERY_SUCCESS:
      return { ...state, status: Status.idle, data: action.payload };
    case GET_GALLERY_FAIL:
      return { ...state, status: Status.failed };
    default:
      return state;
  }
};

export default reducer;
