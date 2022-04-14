import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState } from "../redux/modules";

const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
export default useAppSelector;
