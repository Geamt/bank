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
```
---

#### Technical notes

- This project contains as following

- two routes for geting data of banks

- Routes
    - 1) Syntax : http://shrouded-everglades-88448.herokuapp.com/api/bank/:limit/:offset?ifsc=IFSC number of bank

        example : https://shrouded-everglades-88448.herokuapp.com/api/bank/1/0?ifsc=ABHY0065001

    - 2) Syntax : http://shrouded-everglades-88448.herokuapp.com/api/branch/:limit/:offset?city=CITYNAME&bankname=BANK NAME

        example : https://shrouded-everglades-88448.herokuapp.com/api/branch/5/0?city=MUMBAI&bankname=ABHYUDAYA COOPERATIVE BANK LIMITED

---

### CURL Scripts
#### Generate JWT Token
URL: https://shrouded-everglades-88448.herokuapp.com/api/login

Request:
```bash
curl -X POST \
  https://shrouded-everglades-88448.herokuapp.com/api/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 633d4368-846f-5bbc-2357-90271d0d1cc0' \
  -d 'course_id=5c7d1c132fc40002e4b9d510&faculty=5cc935c979815939e8ec906b'
  ```
Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RVc3JlIiwiZW1haWwiOiJ0ZXN0dXNlckB0ZXN0dXNlci5jb20ifSwiaWF0IjoxNTYxODkwODQzLCJleHAiOjE1NjIzMjI4NDN9.EP7v0-TAuKYmFh04KIoqYXh7Ve_PHjAmZdeoU4To8Bk"
}
```
#### Get bank by IFSC Code
URL: https://shrouded-everglades-88448.herokuapp.com/api/bank/1/0?ifsc=ABHY0065001

Request:
```bash
curl -X GET \
  'https://shrouded-everglades-88448.herokuapp.com/api/bank/1/0?ifsc=ABHY0065001' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RVc3JlIiwiZW1haWwiOiJ0ZXN0dXNlckB0ZXN0dXNlci5jb20ifSwiaWF0IjoxNTYxODkwODQzLCJleHAiOjE1NjIzMjI4NDN9.EP7v0-TAuKYmFh04KIoqYXh7Ve_PHjAmZdeoU4To8Bk' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: d5cca96a-0542-c0c1-19d6-b696301ff8c2'
```
Response:

```json
[
    {
        "ifsc": "ABHY0065001",
        "bank_id": "60",
        "branch": "RTGS-HO",
        "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA"
    }
]
```

#### Get bank by bank name and city
URL: https://shrouded-everglades-88448.herokuapp.com/api/branch/5/0?city=MUMBAI&bankname=ABHYUDAYA COOPERATIVE BANK LIMITED

Request:
```bash
curl -X GET \
  'https://shrouded-everglades-88448.herokuapp.com/api/branch/5/0?city=MUMBAI&bankname=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InRlc3RVc3JlIiwiZW1haWwiOiJ0ZXN0dXNlckB0ZXN0dXNlci5jb20ifSwiaWF0IjoxNTYxODkwODQzLCJleHAiOjE1NjIzMjI4NDN9.EP7v0-TAuKYmFh04KIoqYXh7Ve_PHjAmZdeoU4To8Bk' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 4f0bdb00-92b6-f9fc-e11b-2a7e826cdff8'
  ```
  Response:
  ```json
  [
    {
        "ifsc": "ABHY0065001",
        "bank_id": "60",
        "branch": "RTGS-HO",
        "address": "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "id": "60"
    },
    {
        "ifsc": "ABHY0065002",
        "bank_id": "60",
        "branch": "ABHYUDAYA NAGAR",
        "address": "ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "id": "60"
    },
    {
        "ifsc": "ABHY0065003",
        "bank_id": "60",
        "branch": "BAIL BAZAR",
        "address": "KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "id": "60"
    },
    {
        "ifsc": "ABHY0065004",
        "bank_id": "60",
        "branch": "BHANDUP",
        "address": "CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "id": "60"
    },
    {
        "ifsc": "ABHY0065005",
        "bank_id": "60",
        "branch": "DARUKHANA",
        "address": "POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010",
        "city": "MUMBAI",
        "district": "GREATER MUMBAI",
        "state": "MAHARASHTRA",
        "name": "ABHYUDAYA COOPERATIVE BANK LIMITED",
        "id": "60"
    }
]
```