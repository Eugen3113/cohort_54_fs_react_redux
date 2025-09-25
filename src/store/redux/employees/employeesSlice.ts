import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"
import type { EmployeesSliceState } from "./types"
import type { EmployeeData } from "pages/Layout/types"

const employeesInitialState: EmployeesSliceState = []
export const employeesSlice = createAppSlice({
  name: "EMPLOYEES",
  initialState: employeesInitialState,
  reducers: create => ({
    add: create.reducer((state, action: PayloadAction<EmployeeData>) => {
      state.push(action.payload)
    }),
    delete: create.reducer((state, action: PayloadAction<string>) => {
      return state.filter(employee => employee.id !== action.payload)
    }),
    deleteAll: create.reducer(() => employeesInitialState),
  }),
  //selectors:
  selectors: {
    employees: (state: EmployeesSliceState) => {
      return state
    },
  },
})

export const employeesSliceActions = employeesSlice.actions
export const employeesSliceSelectors = employeesSlice.selectors