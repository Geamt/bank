/**
* @file index.js
* @author Gautam Purohit <purohitg974@gmail.com>
* @description - Index file of the system. Contains initialization of module, Generate and verify JWT token and start server code.
*/

// Public Node modules defining
const express = require('express');
const jwt = require('jsonwebtoken');
const {Client} = require('pg')
const  app = express();
app.use(express.json());

// Create instance of Client for Database operations
const client = new Client({
    connectionString: process.env.DATABASE_URL
    // user: 'hardik',
    // password: '',
    // host: '127.0.0.1',
    // port: 5432,
    // database: 'hello'
})

app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(express.static("public"));

start()
app.get('/',(req,res)=>{
    res.send("Hello world");
});
/**
 * @description - Provide route to get/fetch data by ifsc number of bank
 * 
 * @returns - return json data of banks
 */
app.get('/api/bank',verifyToken,async (req,res,next) => {  // url for queryString '/api/getAll/'
    var ifsc = req.query.ifsc
    var limit = req.query.limit > 0 ? req.query.limit : null;
    var offset = req.query.offset > 0 ? req.query.offset : null;

    //console.log(ifsc,limit,offset);
    
    if(ifsc != undefined && String(ifsc).length > 0)
    {
        try{

            const {rows} = await client.query(`select * from branches where ifsc = $1 limit ${limit} offset ${offset}`,[ifsc]);
            console.log(rows);
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify(rows));
        }
        catch(ex){
            res.send(JSON.stringify([]));
        }
    }
    else
    {
        res.send('please pass IFSC number of bank');
    }

    
})

/**
 * @description - Provide route to get/fetch data by BankName and City of bank
 * 
 * @returns - return josn data of banks
 */
app.get('/api/branch',verifyToken,async (req,res,next) => { 
    var bankname = req.query.bankname;
    var city = req.query.city;
    var limit = req.query.limit > 0 ? req.query.limit : null;
    var offset = req.query.offset > 0 ? req.query.offset : null;

    //console.log(city,bankname,limit,offset);
    
    if((bankname != undefined && String(bankname).length > 0) && (city != undefined && String(city).length > 0)) 
    {
        try{

            const {rows} = await client.query(`select * from branches as br,banks as b where br.bank_id=b.id and br.city = $1 and b.name = $2 limit ${limit} offset ${offset}`,[city,bankname]);
            console.log(rows);
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify(rows));
        }
        catch(ex){
            res.send(JSON.stringify([]));
        }
    }
    else
    {
        res.send('please pass BankName and City for BankBranch');
    }

    
})

/**
 * @description - Provide Authentication using jsonwebtoken 
 * 
 * @returns - return error or token for verification for API with 5 days expire 
 */
app.post('/api/login', (req,res,next) => {
    //create user
    const user ={
        id:1,
        username:'testUsre',
        email:'testuser@testuser.com'
    }
    jwt.sign({user: user}, 'secretkey' , {expiresIn: '5 days'}, (err,token) => {
        if(!err){
            res.json({
                token : token
            })
        }  
    });
})


/**
 * @name verifyToken
 * 
 * @description - Provide jwt verification functinality
 * 
 * @param {RequestObject} req - Incoming request object
 * @param {ResponseObject} res - The response object for incoming request
 * @param (function) next - pass request to next handler
 * 
 * @returns - return error or forward request to next handler
 */
function verifyToken(req,res,next){
    //Get user header
    const header = req.headers['authorization']; //? req.headers['authorization'] : null;
    console.log(typeof header);
    
    
    if(typeof header !== 'undefined')
    {
        //split token from header bearer string
        const bearerStr = header.split(' ');
        //get token from spilt string array
        const token = bearerStr[1];


        jwt.verify(token, 'secretkey' ,(err, authData) => {
             if(!err)
             {
                 req.authData = authData;
                 next();
             }
             else{
                res.sendStatus(403);
             }
        })


    }
    else
    {
        res.sendStatus(403);
    } 
    
}

app.listen(process.env.PORT || 3000);


/**
 * @name start
 * 
 * @description - Provide database connecion
 */
async function start(){
    try{
        await client.connect();
        console.log('connection successfully');
    }
    catch(ex){

        console.log("connection error");

    }
}


