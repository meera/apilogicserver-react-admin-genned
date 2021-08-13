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


export const ShipperList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="CompanyName"/>
            <TextField source="Phone"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const ShipperEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="CompanyName"/>
            <TextInput source="Phone"/>
            <TextInput source="Id"/>
        </SimpleForm>
    </Edit>
);


export const ShipperAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="CompanyName"/>
            <TextField source="Phone"/>
            <TextField source="Id"/>
        </SimpleForm>
    </Edit>
);


const ShipperTitle = ({ record }) => {
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


export const ShipperShow = props => {

    return (

    <Show title={<ShipperTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Shipper Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="CompanyName"/>
                <ShowField source="Phone"/>
                <ShowField source="Id"/>
            </Grid>
        </SimpleShowLayout>
    </Show>
    );
}