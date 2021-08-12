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


export const OrderList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="ShipName"/>
            <TextField source="Customer.CompanyName"/>
            <TextField source="Employee.LastName"/>
            <TextField source="OrderDate"/>
            <TextField source="RequiredDate"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_edit_columns
            <TextInput source="ShipName"/>
            <TextInput source="OrderDate"/>
            <TextInput source="RequiredDate"/>
            <TextInput source="ShippedDate"/>
            <TextInput source="ShipVia"/>
            <TextInput source="Freight"/>
            <TextInput source="ShipAddress"/>
            <TextInput source="ShipCity"/>
            <TextInput source="ShipRegion"/>
            <TextInput source="ShipPostalCode"/>
            <TextInput source="ShipCountry"/>
            <TextInput source="AmountTotal"/>
            <TextInput source="Id"/>
            <TextInput source="CustomerId"/>
            <TextInput source="EmployeeId"/>
        </SimpleForm>
    </Edit>
);


export const OrderAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_add_columns
            <TextField source="ShipName"/>
            <TextField source="OrderDate"/>
            <TextField source="RequiredDate"/>
            <TextField source="ShippedDate"/>
            <TextField source="ShipVia"/>
            <TextField source="Freight"/>
            <TextField source="ShipAddress"/>
            <TextField source="ShipCity"/>
            <TextField source="ShipRegion"/>
            <TextField source="ShipPostalCode"/>
            <TextField source="ShipCountry"/>
            <TextField source="AmountTotal"/>
            <TextField source="Id"/>
            <TextField source="CustomerId"/>
            <TextField source="EmployeeId"/>
        </SimpleForm>
    </Edit>
);


const OrderTitle = ({ record }) => {
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


export const OrderShow = props => {

    return (

    <Show title={<OrderTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Order Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="ShipName"/>
                <ShowField source="Customer.CompanyName"/>
                <ShowField source="Employee.LastName"/>
                <ShowField source="OrderDate"/>
                <ShowField source="RequiredDate"/>
                <ShowField source="ShippedDate"/>
                <ShowField source="ShipVia"/>
                <ShowField source="Freight"/>
                <ShowField source="ShipAddress"/>
                <ShowField source="ShipCity"/>
                <ShowField source="ShipRegion"/>
                <ShowField source="ShipPostalCode"/>
                <ShowField source="ShipCountry"/>
                <ShowField source="AmountTotal"/>
                <ShowField source="Id"/>
                <ShowField source="CustomerId"/>
                <ShowField source="EmployeeId"/>
            </Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
	<TabbedShowLayout>
<Tab label="OrderDetail List">
<ReferenceManyField reference = "OrderDetail"target = "OrderId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="Id"/>
            <TextField source="Product.ProductName"/>
            <TextField source="Order.ShipName"/>
            <TextField source="UnitPrice"/>
            <TextField source="Quantity"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
</TabbedShowLayout>
        </SimpleShowLayout>
    </Show>
    );
}