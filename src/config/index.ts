export { default as routes } from "./routes";
// export { default as axios } from "./axios";
// export { default as moment } from 'moment';
// export { default as Swal } from "sweetalert2";
// export * as yup  from 'yup';
// export { useForm, useWatch } from 'react-hook-form';
// export { yupResolver } from '@hookform/resolvers/yup';
// export { default as toast } from 'react-hot-toast';
// export { default as Cookie } from "js-cookie";

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from "@/redux";

type DispatchFunc = () => AppDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: DispatchFunc = useDispatch;
