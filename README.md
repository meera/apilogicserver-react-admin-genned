# ApiLogicServer - Automated React Admin Creation

This is the source code for a [React Admin](https://marmelab.com/react-admin/) app, created automatically by [APILogicServer](https://github.com/valhuber/ApiLogicServer). 

[View live demo!](https://apilogicserver.askteam.how/) 
(username is admin and password is p)

You can run it locally as described below in [Installation](#Installation).

# Background

## What: Working Software, *Now*

<figure><img src="https://github.com/meera/apilogicserver-react-admin-genned/raw/main/screen-shots/overview.png"></figure>

API Logic Server introspects your database, and creates an executable, customizable project from a single command:

```
ApiLogicServer run  # defaults to pre-installed sample database
```

ApiLogicServer creates the [complete project below](#generated-project) automatically from your data model, including:

* **Backend**

    * [**API:**](https://github.com/valhuber/ApiLogicServer#api-safrs-jsonapi-and-swagger) a JSON:API from [SAFRS](https://github.com/thomaxxl/safrs#readme), used by the react-admin app, via [ra-jsonapi-client](https://github.com/henvo/ra-jsonapi-client)
       * Models: SQLAlchemy requires model classes; these are created automatically from the database
          * You can customize the model, e.g., [denormalizations](https://github.com/valhuber/LogicBank/wiki/Denormalization), [hybrid (virtual) attributes](https://github.com/valhuber/LogicBank/wiki/Denormalization#retrieval-object-model-virtual-attributes), and [supply missing relationships](https://github.com/valhuber/LogicBank/wiki/Managing-Rules#relationships-db-or-virtual).

       * You can [customize the API](https://github.com/valhuber/ApiLogicServer/wiki/ApiLogicServer-Guide#customize-the-model-with-model_extpy-add-relationships-derived-attributes)

    * [**Logic:**](https://github.com/valhuber/ApiLogicServer#logic) declare transactional logic using spreadsheet-like rules (multi-table derivations and constraints)
      * 40x more concise than code, extensible with standard python - [explore it here](https://github.com/valhuber/ApiLogicServer/wiki/Tutorial#2-explore-transaction-logic)


* **Frontend**

   * [**React-Admin App:**](#multi-page-multi-table-application) multi-page, multi-table react-admin app as shown below



## Why: agile collaboration / iteration, business agility

So, in a few moments, you can create working projects that would otherwise require weeks or months, and then customize them:

* **Agile:** Working Sofware *Now* enables you to collaborate with business users over working screens, as a basis for iterations.  This is the basis of the [Agile Manifesto](https://agilemanifesto.org/).


* **Business Agility:** this declarative approach provides remarkable competitive advantage in time to market, and responding to business change.

This positions react-admin with strategic advantages over competitive frameworks:

* **Backend automation,** 40x more concise than code

  > Backend transaction logic is significant - often nearly _half_ the effort for such systems.  Reducing code by 40X can have a _dramatic_ effect on delivery and iteration.

* **Zero learning curve:** Working Software _Now_, Zero Learning Curve

  > A sophisticated multi-page, multi-table app (not Hello World!) is running in moments, with zero learning curve.  Customize the app, by editing working software.


# Multi-page, Multi-Table Application

Observe the following screens created from the [sample database](https://github.com/valhuber/ApiLogicServer/wiki/Sample-Database), in the subsections below.

## Customer List

List screens support _filtering_, _sorting_ and _pagination_.  

Note that fields are _intelligently ordered_ - name fields first, Id fields last, etc.

Clicking a row opens ```Customer Show```, below.
<figure><img src="https://github.com/meera/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerList.png"></figure>

## Customer Show

Show screens show all the attributes of an object, with a tab sheet showing a list of related Child rows.  

Clicking a child row opens up _its_ show page, enabling you to walk the database relationships.

<figure><img src="https://github.com/meera/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerShow.png"></figure>

## Order Show

Observe the automatic joins, so you can see the Product Name instead of the Product Id (not currently working).

<figure><img src="https://github.com/meera/apilogicserver-react-admin-genned/raw/main/screen-shots/OrderShow.png"></figure>

# Generated Project

The UI components includes a react-admin folder:

<figure><img src="https://github.com/meera/apilogicserver-react-admin-genned/raw/main/screen-shots/created-project.png"></figure>

## Customizable - Backend and Frontend

API Logic server backends are [customizable as described here](https://github.com/valhuber/ApiLogicServer#customize-the-created-project).

Likewise, the created react-admin project preserves the [customize without ejecting](https://marmelab.com/blog/2021/07/22/cra-webpack-no-eject.html) approach of react-admin.

# Status - technology exploration

API Logic Server react-admin creation services are not yet suitable for use, nor provided in the ```pip``` version.  They are available in the API Logic Server git project, to support technology exploration.

## Key Issue - Joins

As shown on the [Order Show](#order-show) ("missing joins - product name"), joins are not yet operaational.  Support appears to be available in 
the [react-admin enterprise edition](https://marmelab.com/ra-enterprise/modules/ra-relationships), but has not been tried.

Is joins support required from ra-json-api-client?

We are seeking collaborators.


# Installation

Before you install this react app for APILogicServer, you need to have npm, node and yarn installed on your local machine. 

Use this website to install npm, node and yarn - [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

### `yarn install`
This will install all the dependencies listed within package.json.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.

## How to Get Support

Contact the developers: meera.datey@gmail.com or valjhuber@gmail.com.

