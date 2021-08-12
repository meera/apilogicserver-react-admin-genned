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


export const TerritoryList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="TerritoryDescription"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const TerritoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_edit_columns
            <TextInput source="TerritoryDescription"/>
            <TextInput source="Id"/>
            <TextInput source="RegionId"/>
        </SimpleForm>
    </Edit>
);


export const TerritoryAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_add_columns
            <TextField source="TerritoryDescription"/>
            <TextField source="Id"/>
            <TextField source="RegionId"/>
        </SimpleForm>
    </Edit>
);


const TerritoryTitle = ({ record }) => {
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


export const TerritoryShow = props => {

    return (

    <Show title={<TerritoryTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  Territory Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="TerritoryDescription"/>
                <ShowField source="Id"/>
                <ShowField source="RegionId"/>
            </Grid>
<hr style={{ margin: "30px 0px 30px" }}/>
	<TabbedShowLayout>
<Tab label="EmployeeTerritory List">
<ReferenceManyField reference = "EmployeeTerritory"target = "TerritoryId"addLabel = {false}>
<Datagrid rowClick="show">
            <TextField source="Id"/>
            <TextField source="Employee.LastName"/>
            <TextField source="Territory.TerritoryDescription"/>
<EditButton />
</Datagrid>
</ReferenceManyField>
</Tab>
</TabbedShowLayout>
        </SimpleShowLayout>
    </Show>
    );
}