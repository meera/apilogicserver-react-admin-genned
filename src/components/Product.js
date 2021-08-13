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


export const ProductList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="ProductName"/>
            <TextField source="QuantityPerUnit"/>
            <TextField source="UnitPrice"/>
            <TextField source="UnitsInStock"/>
            <TextField source="UnitsOnOrder"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="ProductName"/>
            <TextInput source="QuantityPerUnit"/>
            <TextInput source="UnitPrice"/>
            <TextInput source="UnitsInStock"/>
            <TextInput source="UnitsOnOrder"/>
            <TextInput source="ReorderLevel"/>
            <TextInput source="Discontinued"/>
            <TextInput source="UnitsShipped"/>
            <TextInput source="CategoryId"/>
            <TextInput source="SupplierId"/>
            <TextInput source="Id"/>
        </SimpleForm>
    </Edit>
);


export const ProductAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="ProductName"/>
            <TextField source="QuantityPerUnit"/>
            <TextField source="UnitPrice"/>
            <TextField source="UnitsInStock"/>
            <TextField source="UnitsOnOrder"/>
            <TextField source="ReorderLevel"/>
            <TextField source="Discontinued"/>
            <TextField source="UnitsShipped"/>
            <TextField source="CategoryId"/>
            <TextField source="SupplierId"/>
            <TextField source="Id"/>
        </SimpleForm>
    </Edit>
);


const ProductTitle = ({ record }) => {
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


export const ProductShow = props => {

    return (

    <Show title={<ProductTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Product Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="ProductName"/>
                <ShowField source="QuantityPerUnit"/>
                <ShowField source="UnitPrice"/>
                <ShowField source="UnitsInStock"/>
                <ShowField source="UnitsOnOrder"/>
                <ShowField source="ReorderLevel"/>
                <ShowField source="Discontinued"/>
                <ShowField source="UnitsShipped"/>
                <ShowField source="CategoryId"/>
                <ShowField source="SupplierId"/>
                <ShowField source="Id"/>
            </Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
	<TabbedShowLayout>
<Tab label="OrderDetail List">
<ReferenceManyField reference = "OrderDetail"target = "ProductId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="Id"/>
            <TextField source="Order.ShipName"/>
            <TextField source="Product.ProductName"/>
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