import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeesSliceActions,
  employeesSliceSelectors,
} from "store/redux/employees/employeesSlice"

import Button from "components/Button/Button"

import {
  PageWrapper,
  Cards,
  CardWrapper,
  CardInfo,
  CardInfoTitle,
  CardInfoContent,
  ButtonControl,
} from "./styles"
import { EmployeeData } from "pages/Layout/types"

function Employees() {
  const dispatch = useAppDispatch()

  const employeeData = useAppSelector(employeesSliceSelectors.employees)
  const onDelete = (id: string) => {
    dispatch(employeesSliceActions.delete(id))
  }
  const onDeleteAll = () => {
    dispatch(employeesSliceActions.deleteAll())
  }

  const employeeList = employeeData.map((employee: EmployeeData) => {
    return (
      <CardWrapper key={employee.id}>
        <CardInfo>
          <CardInfoTitle>Name</CardInfoTitle>
          <CardInfoContent>{employee?.name}</CardInfoContent>
        </CardInfo>
        <CardInfo>
          <CardInfoTitle>Surname</CardInfoTitle>
          <CardInfoContent>{employee?.surname}</CardInfoContent>
        </CardInfo>
        <CardInfo>
          <CardInfoTitle>Age</CardInfoTitle>
          <CardInfoContent>{employee?.age}</CardInfoContent>
        </CardInfo>
        {!!employee?.job && (
          <CardInfo>
            <CardInfoTitle>Job Position</CardInfoTitle>
            <CardInfoContent>{employee?.job}</CardInfoContent>
          </CardInfo>
        )}
        <Button name="Delete" isRed onClick={() => onDelete(employee.id)} />
      </CardWrapper>
    )
  })

  return (
    <PageWrapper>
      <Cards>{employeeList}</Cards>
      {!!employeeData.length && (
        <ButtonControl>
          <Button name="Remove All Employees" isRed onClick={onDeleteAll} />
        </ButtonControl>
      )}
    </PageWrapper>
  )
}

export default Employees