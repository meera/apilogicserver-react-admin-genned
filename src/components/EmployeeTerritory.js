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


export const EmployeeTerritoryList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="Id"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Territory.TerritoryDescription"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const EmployeeTerritoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_edit_columns
            <TextInput source="Id"/>
            <TextInput source="TerritoryId"/>
            <TextInput source="EmployeeId"/>
        </SimpleForm>
    </Edit>
);


export const EmployeeTerritoryAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_add_columns
            <TextField source="Id"/>
            <TextField source="TerritoryId"/>
            <TextField source="EmployeeId"/>
        </SimpleForm>
    </Edit>
);


const EmployeeTerritoryTitle = ({ record }) => {
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


export const EmployeeTerritoryShow = props => {

    return (

    <Show title={<EmployeeTerritoryTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  EmployeeTerritory Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="Id"/>
                <ShowField source="Employee.LastName"/>
                <ShowField source="Territory.TerritoryDescription"/>
                <ShowField source="TerritoryId"/>
                <ShowField source="EmployeeId"/>
            </Grid>
        </SimpleShowLayout>
    </Show>
    );
}