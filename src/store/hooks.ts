// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable no-restricted-imports */
// Этот файл служит центральным узлом для реэкспорта предварительно типизированных хуков Redux.
// Этот импорт ограничен в других местах, чтобы обеспечить единообразное
// использование типизированных хуков во всем приложении.
// Мы отключаем здесь правило ESLint, поскольку это назначенное место
// для импорта и реэкспорта типизированных версий хуков.
/* eslint-disable no-restricted-imports */
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// Используйте во всем приложении вместо обычного `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
