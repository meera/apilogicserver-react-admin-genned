import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// ApiLogicServer_server_imports
import {CategoryList, CategoryEdit, CategoryShow} from './components/Category';
import {CustomerList, CustomerEdit, CustomerShow} from './components/Customer';
import {CustomerDemographicList, CustomerDemographicEdit, CustomerDemographicShow} from './components/CustomerDemographic';
import {EmployeeList, EmployeeEdit, EmployeeShow} from './components/Employee';
import {ProductList, ProductEdit, ProductShow} from './components/Product';
import {RegionList, RegionEdit, RegionShow} from './components/Region';
import {ShipperList, ShipperEdit, ShipperShow} from './components/Shipper';
import {SupplierList, SupplierEdit, SupplierShow} from './components/Supplier';
import {TerritoryList, TerritoryEdit, TerritoryShow} from './components/Territory';
import {CustomerCustomerDemoList, CustomerCustomerDemoEdit, CustomerCustomerDemoShow} from './components/CustomerCustomerDemo';
import {EmployeeAuditList, EmployeeAuditEdit, EmployeeAuditShow} from './components/EmployeeAudit';
import {EmployeeTerritoryList, EmployeeTerritoryEdit, EmployeeTerritoryShow} from './components/EmployeeTerritory';
import {OrderList, OrderEdit, OrderShow} from './components/Order';
import {OrderDetailList, OrderDetailEdit, OrderDetailShow} from './components/OrderDetail';

import jsonapiClient from "ra-jsonapi-client";
import NotFound  from "./pages/NotFound";
import authProvider from "./authprovider";

import Dashboard from "./pages/Dashboard";
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactsIcon from '@material-ui/icons/Contacts';
import LoginPage from './pages/LoginPage';

const dataProvider = jsonapiClient('https://apilogicserver.pythonanywhere.com'); // http://localhost:5000
// e.g., const dataProvider = jsonapiClient('https://apilogicserver.pythonanywhere.com');

const App = () => (
      <Admin loginPage={LoginPage}  dashboard={Dashboard} dataProvider={dataProvider} catchAll={NotFound} authProvider={authProvider}>
<Resource name="Category" show={CategoryShow} edit={CategoryEdit} list={CategoryList} icon={ContactsIcon} />
<Resource name="Customer" show={CustomerShow} edit={CustomerEdit} list={CustomerList} icon={ContactsIcon} />
<Resource name="CustomerDemographic" show={CustomerDemographicShow} edit={CustomerDemographicEdit} list={CustomerDemographicList} icon={ContactsIcon} />
<Resource name="Employee" show={EmployeeShow} edit={EmployeeEdit} list={EmployeeList} icon={ContactsIcon} />
<Resource name="Product" show={ProductShow} edit={ProductEdit} list={ProductList} icon={ContactsIcon} />
<Resource name="Region" show={RegionShow} edit={RegionEdit} list={RegionList} icon={ContactsIcon} />
<Resource name="Shipper" show={ShipperShow} edit={ShipperEdit} list={ShipperList} icon={ContactsIcon} />
<Resource name="Supplier" show={SupplierShow} edit={SupplierEdit} list={SupplierList} icon={ContactsIcon} />
<Resource name="Territory" show={TerritoryShow} edit={TerritoryEdit} list={TerritoryList} icon={ContactsIcon} />
<Resource name="CustomerCustomerDemo" show={CustomerCustomerDemoShow} edit={CustomerCustomerDemoEdit} list={CustomerCustomerDemoList} icon={ContactsIcon} />
<Resource name="EmployeeAudit" show={EmployeeAuditShow} edit={EmployeeAuditEdit} list={EmployeeAuditList} icon={ContactsIcon} />
<Resource name="EmployeeTerritory" show={EmployeeTerritoryShow} edit={EmployeeTerritoryEdit} list={EmployeeTerritoryList} icon={ContactsIcon} />
<Resource name="Order" show={OrderShow} edit={OrderEdit} list={OrderList} icon={ContactsIcon} />
<Resource name="OrderDetail" show={OrderDetailShow} edit={OrderDetailEdit} list={OrderDetailList} icon={ContactsIcon} />
          {/* <Resource name="Employee" edit={EditGuesser} list={EmployeeList} icon={UserIcon}/>  */}

      </Admin>
  );
  
export default App;
