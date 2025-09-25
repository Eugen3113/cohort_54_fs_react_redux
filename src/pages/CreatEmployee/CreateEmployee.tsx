import { useAppDispatch } from "store/hooks"
import { employeesSliceActions } from "store/redux/employees/employeesSlice.ts"

import { useFormik } from "formik"
import * as Yup from "yup"
import { v4 } from "uuid"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { FormContainer, InputsContainer } from "./styles.ts"
import { CREATE_EMPLOYEE_FORM_VALUES } from "./types.ts"
import type { EmployeeData } from "../Layout/types.ts"

function CreateEmployee() {
  const dispatch = useAppDispatch()

  const onAdd = (emp: EmployeeData) => {
    dispatch(employeesSliceActions.add(emp))
  }

  const validationSchema = Yup.object().shape({
    [CREATE_EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .trim()
      .required("Name field is required")
      .min(2, "Name field should contain minimum 2 characters")
      .max(50, "Name field should contain maximum 50 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .trim()
      .required("Surname field is required")
      .max(15, "Surname field should contain maximum 15 characters"),
    [CREATE_EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .trim()
      .required("Age field is required")
      .min(1, "Age field should contain minimum 1 characters")
      .max(3, "Age field should contain maximum 3 characters")
      .matches(/^\d+$/, "Age field must contain only numbers"),
    [CREATE_EMPLOYEE_FORM_VALUES.JOB]: Yup.string()
      .trim()
      .max(30, "Job field should contain maximum 30 characters"),
  })

  const formik = useFormik({
    initialValues: {
      [CREATE_EMPLOYEE_FORM_VALUES.NAME]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.AGE]: "",
      [CREATE_EMPLOYEE_FORM_VALUES.JOB]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      const employee: EmployeeData = {
        id: v4(),
        name: values[CREATE_EMPLOYEE_FORM_VALUES.NAME],
        surname: values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME],
        age: values[CREATE_EMPLOYEE_FORM_VALUES.AGE],
        job: values[CREATE_EMPLOYEE_FORM_VALUES.JOB],
      }
      onAdd(employee)

      helpers.resetForm()
      alert(
        `User ${values[CREATE_EMPLOYEE_FORM_VALUES.NAME].trim()} ${values[
          CREATE_EMPLOYEE_FORM_VALUES.SURNAME
        ].trim()} successfully created`,
      )
    },
  })

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          id="name-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.NAME}
          placeholder="John"
          label="Name*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.NAME]}
        />
        <Input
          id="surname-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.SURNAME}
          placeholder="Johnson"
          label="Surname*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.SURNAME]}
        />
        <Input
          id="age-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.AGE}
          placeholder="25"
          label="Age*"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.AGE]}
        />
        <Input
          id="job-id"
          name={CREATE_EMPLOYEE_FORM_VALUES.JOB}
          placeholder="QA"
          label="Job Position"
          value={formik.values[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
          onChange={formik.handleChange}
          error={formik.errors[CREATE_EMPLOYEE_FORM_VALUES.JOB]}
        />
      </InputsContainer>
      <Button name="Create" type="submit" />
    </FormContainer>
  )
}

export default CreateEmployee