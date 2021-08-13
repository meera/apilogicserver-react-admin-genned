# Getting Started with React Admin for ApiLogicServer

This is the source code for a [React Admin](https://marmelab.com/react-admin/) app, created automatically by [APILogicServer](https://github.com/valhuber/ApiLogicServer). 

[View live demo!](https://apilogicserver.askteam.how/) 
(username is admin and password is p)

You can run it locally as described below in [Installation](#Installation).

# Background

## What: working software, *now*

API Logic Server introspects your database and creates customizable project from a single command:

```
ApiLogicServer run  # defaults to pre-installed sample database
```

ApiLogicServer creates the [complete project below]((#generated-project)) from your data model, including:
* **Models:** SQLAlchemy requires model classes; these are created automatically from the database
  * You can customize the model, e.g., [denormalizations](https://github.com/valhuber/LogicBank/wiki/Denormalization), [hybrid (virtual) attributes](https://github.com/valhuber/LogicBank/wiki/Denormalization), and [supply missing relationships](https://github.com/valhuber/LogicBank/wiki/Managing-Rules#relationships-db-or-virtual).
  
* [**API:**](https://github.com/valhuber/ApiLogicServer#api-safrs-jsonapi-and-swagger) a JSON:API from [SAFRS](https://github.com/thomaxxl/safrs#readme), used by the react-admin app, via [ra-jsonapi-client](https://github.com/henvo/ra-jsonapi-client)
* [**Logic:**](https://github.com/valhuber/ApiLogicServer#logic) declare transactional logic using spreadsheet-like rules (multi-table derivations and constraints)
  * 40x more concise than code, extensible with standard python - [explore it here](https://github.com/valhuber/ApiLogicServer/wiki/Tutorial#2-explore-transaction-logic)
* [**UI:**](#multi-page-multi-table-application) multi-page, multi-table react-admin apps as shown below

## Why: agile collaboration / iteration, business agility

So, in a few seconds, you can create working projects that would otherwise require weeks or months, and then customize them.

* **Agile:** working sofware *now* enables you to collaborate with business users over working screens, as a basis for iterations

* **Business Agility:** this declarative approach provides remarkable competitive advantage in time to market, and responding to business change.


# Multi-page, Multi-Table Application

Observe the following screens created from the [sample database](https://github.com/valhuber/ApiLogicServer/wiki/Sample-Database):

## Customer List

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerList.png"></figure>

## Customer Show

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/CustomerShow.png"></figure>

## Order Show

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/OrderShow.png"></figure>

# Generated Project

The UI components includes a react-admin folder:

<figure><img src="https://github.com/valhuber/apilogicserver-react-admin-genned/raw/main/screen-shots/created-project.png"></figure>

## Customizable - Backend and Frontend

API Logic server backends are [customizable as described here](https://github.com/valhuber/ApiLogicServer#customize-the-created-project).

Likewise, the created react-admin project preserves the [customize without ejecting](https://marmelab.com/blog/2021/07/22/cra-webpack-no-eject.html) approach of react-admin.



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

Builds the app for production to the `build` folder.\

## How to Get Support

Contact the developers: meera.datey@gmail.com or valjhuber@gmail.com.

