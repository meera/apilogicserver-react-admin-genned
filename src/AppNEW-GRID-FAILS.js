import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import {CustomerList, CustomerEdit, CustomerShow} from './components/Customer';
import {CustomerCustomerDemoList, CustomerCustomerDemoEdit, CustomerCustomerDemoShow} from './components/CustomerCustomerDemo';
import {EmployeeList, EmployeeEdit, EmployeeShow} from './components/Employee';
import {OrderList, OrderEdit, OrderShow} from './components/Order';

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
          <Resource name="Customer" show={CustomerShow} edit={CustomerEdit} list={CustomerList} icon={ContactsIcon} />
          <Resource name="Order" show={OrderShow} edit={OrderEdit} list={OrderList} icon={ShoppingCartIcon}/>
          <Resource name="CustomerCustomerDemo" show={CustomerCustomerDemoShow} edit={CustomerCustomerDemoEdit} list={CustomerCustomerDemoList} icon={ContactsIcon} />
          <Resource name="Employee" edit={EmployeeEdit} list={EmployeeList} icon={UserIcon}/>
          }

      </Admin>
  );
  
export default App;
