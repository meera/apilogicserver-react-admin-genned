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


export const CustomerList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="CompanyName"/>
            <TextField source="ContactName"/>
            <TextField source="ContactTitle"/>
            <TextField source="Address"/>
            <TextField source="City"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="CompanyName"/>
            <TextInput source="ContactName"/>
            <TextInput source="ContactTitle"/>
            <TextInput source="Address"/>
            <TextInput source="City"/>
            <TextInput source="Region"/>
            <TextInput source="PostalCode"/>
            <TextInput source="Country"/>
            <TextInput source="Phone"/>
            <TextInput source="Fax"/>
            <TextInput source="Balance"/>
            <TextInput source="CreditLimit"/>
            <TextInput source="OrderCount"/>
            <TextInput source="UnpaidOrderCount"/>
            <TextInput source="Id"/>
        </SimpleForm>
    </Edit>
);


export const CustomerAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="CompanyName"/>
            <TextField source="ContactName"/>
            <TextField source="ContactTitle"/>
            <TextField source="Address"/>
            <TextField source="City"/>
            <TextField source="Region"/>
            <TextField source="PostalCode"/>
            <TextField source="Country"/>
            <TextField source="Phone"/>
            <TextField source="Fax"/>
            <TextField source="Balance"/>
            <TextField source="CreditLimit"/>
            <TextField source="OrderCount"/>
            <TextField source="UnpaidOrderCount"/>
            <TextField source="Id"/>
        </SimpleForm>
    </Edit>
);


const CustomerTitle = ({ record }) => {
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


export const CustomerShow = props => {

    return (

    <Show title={<CustomerTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Customer Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="CompanyName"/>
                <ShowField source="ContactName"/>
                <ShowField source="ContactTitle"/>
                <ShowField source="Address"/>
                <ShowField source="City"/>
                <ShowField source="Region"/>
                <ShowField source="PostalCode"/>
                <ShowField source="Country"/>
                <ShowField source="Phone"/>
                <ShowField source="Fax"/>
                <ShowField source="Balance"/>
                <ShowField source="CreditLimit"/>
                <ShowField source="OrderCount"/>
                <ShowField source="UnpaidOrderCount"/>
                <ShowField source="Id"/>
            </Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
	<TabbedShowLayout>
<Tab label="CustomerCustomerDemo List">
<ReferenceManyField reference = "CustomerCustomerDemo"target = "CustomerId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="Id"/>
            <TextField source="Customer.CompanyName"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
<Tab label="Order List">
<ReferenceManyField reference = "Order"target = "CustomerId"addLabel = {false}>
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