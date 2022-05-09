import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {blankEmployee, Employee, EmployeeError} from "./EmployeeForm.types";

export type EmployeeFormProps = {
    employee: Employee,
    setEmployee: (employee: Employee) => void,
    error: EmployeeError,
    submit: () => void;
}

export function EmployeeForm(props: EmployeeFormProps) {
    return (
        <form autoComplete={'off'}>
            <TextField
                value={props.employee.firstName}
                placeholder={'First Name'}
                onChange={(e) => {
                    const newEmployee: Employee = {...props.employee, firstName: e.currentTarget.value}
                    props.setEmployee(newEmployee)
                }}
                error={props.error.firstName !== undefined}
                helperText={props.error.firstName}
            />
            <TextField
                value={props.employee.lastName}
                placeholder={'Last Name'}
                onChange={(e) => {
                    const newEmployee: Employee = {...props.employee, lastName: e.currentTarget.value}
                    props.setEmployee(newEmployee)
                }}
                error={props.error.lastName !== undefined}
                helperText={props.error.lastName}
            />
            <Button onClick={(e) => {
                props.submit()
            }}>
                Submit
            </Button>
        </form>
    )
}
