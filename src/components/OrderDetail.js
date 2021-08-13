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


export const OrderDetailList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="Id"/>
            <TextField source="Order.ShipName"/>
            <TextField source="Product.ProductName"/>
            <TextField source="UnitPrice"/>
            <TextField source="Quantity"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const OrderDetailEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="Id"/>
            <TextInput source="UnitPrice"/>
            <TextInput source="Quantity"/>
            <TextInput source="Discount"/>
            <TextInput source="Amount"/>
            <TextInput source="ShippedDate"/>
            <TextInput source="OrderId"/>
            <TextInput source="ProductId"/>
        </SimpleForm>
    </Edit>
);


export const OrderDetailAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="Id"/>
            <TextField source="UnitPrice"/>
            <TextField source="Quantity"/>
            <TextField source="Discount"/>
            <TextField source="Amount"/>
            <TextField source="ShippedDate"/>
            <TextField source="OrderId"/>
            <TextField source="ProductId"/>
        </SimpleForm>
    </Edit>
);


const OrderDetailTitle = ({ record }) => {
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


export const OrderDetailShow = props => {

    return (

    <Show title={<OrderDetailTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  OrderDetail Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="Id"/>
                <ShowField source="Order.ShipName"/>
                <ShowField source="Product.ProductName"/>
                <ShowField source="UnitPrice"/>
                <ShowField source="Quantity"/>
                <ShowField source="Discount"/>
                <ShowField source="Amount"/>
                <ShowField source="ShippedDate"/>
                <ShowField source="OrderId"/>
                <ShowField source="ProductId"/>
            </Grid>
        </SimpleShowLayout>
    </Show>
    );
}