export { default as routes } from "./routes";
export { default as axios } from "./axios";

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from "@/redux";

type DispatchFunc = () => AppDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: DispatchFunc = useDispatch;
