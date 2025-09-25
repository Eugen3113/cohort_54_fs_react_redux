import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"

import { counterSlice } from "store/redux/counter/counterSlice";
import { feedbackSlice } from "store/redux/feedback/feedbackSlice"
import { catFactSlice } from "./redux/catFact/catFactSlice";
import { employeesSlice } from "./redux/employees/employeesSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
// `combineSlices` автоматически объединяет reducers, используя
// их `reducerPath`, поэтому нам больше не нужно вызывать `combineReducers`.
const rootReducer = combineSlices(counterSlice, feedbackSlice, employeesSlice, catFactSlice)
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
// Настройка store заключена в `makeStore` для возможности повторного использования
// при настройке тестов, которым требуется та же конфигурация store
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  return store
}

export const store = makeStore()

// Infer the type of `store`
// Вывести тип `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
// Вывести тип `AppDispatch` из самого хранилища(store)
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
