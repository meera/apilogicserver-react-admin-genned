import { React } from "react";
import { List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
} from "react-admin";
import Grid from '@material-ui/core/Grid';
import { TabbedShowLayout, Tab } from 'react-admin';

import {
  Edit,
  Show,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
  NumberInput,
  SimpleShowLayout,
  ReferenceManyField,
  ShowController,
  useRecordContext
} from "react-admin";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];


export const EmployeeAuditList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="LastName"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Title"/>
            <TextField source="Salary"/>
            <TextField source="FirstName"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const EmployeeAuditEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="LastName"/>
            <TextInput source="Title"/>
            <TextInput source="Salary"/>
            <TextInput source="FirstName"/>
            <TextInput source="CreatedOn"/>
            <TextInput source="EmployeeId"/>
            <TextInput source="Id"/>
        </SimpleForm>
    </Edit>
);


export const EmployeeAuditAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="LastName"/>
            <TextField source="Title"/>
            <TextField source="Salary"/>
            <TextField source="FirstName"/>
            <TextField source="CreatedOn"/>
            <TextField source="EmployeeId"/>
            <TextField source="Id"/>
        </SimpleForm>
    </Edit>
);


const EmployeeAuditTitle = ({ record }) => {
    return <span>Post {record ? `ID: "${record.id}" ContactName: "${record.ContactName}"` : ''}</span>;
};


const ShowField = ({ source }) => {
  const record = useRecordContext();
  return record ? (
    <Grid item xs={3}>
      <Typography variant="body2" color="textSecondary" component="p">
        {source}
      </Typography>
      <Typography variant="body2" component="p">
        {record[source]}
      </Typography>
    </Grid>
  ) : null;
};


export const EmployeeAuditShow = props => {

    return (

    <Show title={<EmployeeAuditTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  EmployeeAudit Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="LastName"/>
                <ShowField source="Employee.LastName"/>
                <ShowField source="Title"/>
                <ShowField source="Salary"/>
                <ShowField source="FirstName"/>
                <ShowField source="CreatedOn"/>
                <ShowField source="EmployeeId"/>
                <ShowField source="Id"/>
            </Grid>
        </SimpleShowLayout>
    </Show>
    );
}