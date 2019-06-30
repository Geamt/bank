## Node-Express-JWT-PostgreSQL Project.
- A application for building a REST api by using the nodejs as a server, express as a web framework.
- To provide a persistent data storage PostgreSQL is available.  

---
#### Startup Requirements
Make sure that tools describe the below are available in your machine.
- NodeJs
- PostgreSQL

## Node-Express-JWT-PostgreSQL Project.
- A application for building a REST api by using the nodejs as a server, express as a web framework.
- To provide a persistent data storage PostgreSQL is available.  

---
#### Startup Requirements
Make sure that tools describe the below are available in your machine.
- NodeJs
- PostgreSQL

You can take a reference of below websites for help or download the above tools. 

- [Node-js](https://nodejs.org/en/download/package-manager/)

- [PostgresSQL](https://www.postgresql.org/)


---
#### Install dependencies
```
npm i
```
---
#### Project commands

- To run the project in development mode.
```
npm start

npm run lint
```
- To automatic fix linting errors at some level
```
npm run lint-fix
```
---
#### Technical notes

- This project contains as following

- two routes for geting data of banks

- Routes
    - 1) Syntax : http://localhost/api/bank/:limit/:offset?ifsc=IFSC number of bank

        example : http://localhost/api/bank/5/0?ifsc=ABHY0065001
    - 2) Syntax : http://localhost/api/branch/:limit/:offset?city=CITYNAME&bankname=BANK NAME

        example : http://localhost/api/branch/5/0/?city=MUMBAI&bankname=ABHYUDAYA COOPERATIVE BANK LIMITED
        
