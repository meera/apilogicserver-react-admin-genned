import { React } from "react";
import { List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
} from "react-admin";
import Grid from '@material-ui/core/Grid';

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

const customerFilters = [<TextInput source="q" label="Search" alwaysOn />];

export const CustomerList = (props) => (
  <List filters={customerFilters} perPage={10} {...props}>
    <Datagrid expand={<CustomerShow />} rowClick="show">
      <TextField source="CompanyName" />
      <TextField source="ContactName" />
      <TextField source="Phone" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CustomerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="Address" />
      <TextInput source="Balance" />
      <TextInput source="City" />
      <TextInput source="CompanyName" />
      <TextInput source="ContactName" />
      <TextInput source="ContactTitle" />
      <TextInput source="Country" />
      <TextInput source="CreditLimit" />
      <TextInput source="Fax" />
      <ReferenceInput source="Id" reference="s">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NumberInput source="OrderCount" />
      <TextInput source="Phone" />
      <DateInput source="PostalCode" />
      <TextInput source="Region" />
      <NumberInput source="UnpaidOrderCount" />
    </SimpleForm>
  </Edit>
);
const CustomerTitle = ({ record }) => {
  return (
    <span>
      Post{" "}
      {record ? `ID: "${record.id}" ContactName: "${record.ContactName}"` : ""}
    </span>
  );
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

export const CustomerShow = (props) => {
  return (
    <Show title={<CustomerTitle />} {...props}>
      <SimpleShowLayout>
      <Typography variant="h5"
 component="h5" style={{ margin: "30px 0px 30px" }}>
  Customer Data:
  </Typography>

        <Grid container spacing={3} margin={5} m={40}>

            <ShowField source="id" />


            <ShowField source="Balance" />



            <ShowField source="Address" />



          <ShowField source="City" />


          <ShowField source="CompanyName" />


          <ShowField source="ContactName" />

        <ShowField source="ContactTitle" />

<ShowField source="Country" />

<ShowField source="CreditLimit" />

<ShowField source="Fax" />


<ShowField source="OrderCount" />

<ShowField source="Phone" />

<ShowField source="PostalCode" />

<ShowField source="Region" />
<ShowField source="UnpaidOrderCount" />

</Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
<Typography variant="h5"
 component="h5">
  Orders
  </Typography>


        <ReferenceManyField
          reference="Order"
          target="CustomerId"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="AmountTotal" />
            <TextField source="Freight" />
            <DateField source="OrderDate" />
            <DateField source="RequiredDate" />
            <TextField source="ShipAddress" />
            <TextField source="ShipCity" />
            <TextField source="ShipCountry" />
            <TextField source="ShipName" />
            <TextField source="ShipPostalCode" />
            <TextField source="ShipRegion" />
            <NumberField source="ShipVia" />
            <DateField source="ShippedDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
