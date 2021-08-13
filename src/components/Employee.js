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


export const EmployeeList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="LastName"/>
            <TextField source="FirstName"/>
            <TextField source="Title"/>
            <TextField source="TitleOfCourtesy"/>
            <TextField source="BirthDate"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const EmployeeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="LastName"/>
            <TextInput source="FirstName"/>
            <TextInput source="Title"/>
            <TextInput source="TitleOfCourtesy"/>
            <TextInput source="BirthDate"/>
            <TextInput source="HireDate"/>
            <TextInput source="Address"/>
            <TextInput source="City"/>
            <TextInput source="Region"/>
            <TextInput source="PostalCode"/>
            <TextInput source="Country"/>
            <TextInput source="HomePhone"/>
            <TextInput source="Extension"/>
            <TextInput source="Photo"/>
            <TextInput source="Notes"/>
            <TextInput source="ReportsTo"/>
            <TextInput source="PhotoPath"/>
            <TextInput source="IsCommissioned"/>
            <TextInput source="Salary"/>
            <TextInput source="Id"/>
        </SimpleForm>
    </Edit>
);


export const EmployeeAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="LastName"/>
            <TextField source="FirstName"/>
            <TextField source="Title"/>
            <TextField source="TitleOfCourtesy"/>
            <TextField source="BirthDate"/>
            <TextField source="HireDate"/>
            <TextField source="Address"/>
            <TextField source="City"/>
            <TextField source="Region"/>
            <TextField source="PostalCode"/>
            <TextField source="Country"/>
            <TextField source="HomePhone"/>
            <TextField source="Extension"/>
            <TextField source="Photo"/>
            <TextField source="Notes"/>
            <TextField source="ReportsTo"/>
            <TextField source="PhotoPath"/>
            <TextField source="IsCommissioned"/>
            <TextField source="Salary"/>
            <TextField source="Id"/>
        </SimpleForm>
    </Edit>
);


const EmployeeTitle = ({ record }) => {
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


export const EmployeeShow = props => {

    return (

    <Show title={<EmployeeTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Employee Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="LastName"/>
                <ShowField source="FirstName"/>
                <ShowField source="Title"/>
                <ShowField source="TitleOfCourtesy"/>
                <ShowField source="BirthDate"/>
                <ShowField source="HireDate"/>
                <ShowField source="Address"/>
                <ShowField source="City"/>
                <ShowField source="Region"/>
                <ShowField source="PostalCode"/>
                <ShowField source="Country"/>
                <ShowField source="HomePhone"/>
                <ShowField source="Extension"/>
                <ShowField source="Photo"/>
                <ShowField source="Notes"/>
                <ShowField source="ReportsTo"/>
                <ShowField source="PhotoPath"/>
                <ShowField source="IsCommissioned"/>
                <ShowField source="Salary"/>
                <ShowField source="Id"/>
            </Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
	<TabbedShowLayout>
<Tab label="EmployeeAudit List">
<ReferenceManyField reference = "EmployeeAudit"target = "EmployeeId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="LastName"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Title"/>
            <TextField source="Salary"/>
            <TextField source="FirstName"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
<Tab label="EmployeeTerritory List">
<ReferenceManyField reference = "EmployeeTerritory"target = "EmployeeId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="Id"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Territory.TerritoryDescription"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
<Tab label="Order List">
<ReferenceManyField reference = "Order"target = "EmployeeId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="ShipName"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Customer.CompanyName"/>
            <TextField source="OrderDate"/>
            <TextField source="RequiredDate"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
</TabbedShowLayout>
        </SimpleShowLayout>
    </Show>
    );
}