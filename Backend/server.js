const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "delicious-app"
})

app.post('/Signup' , (req, res) =>{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO useraccount (`username`,`email`,`password`) VALUES(?,?,?)", [username,email,password], 
    (err, result) =>{
        console.log(err);
    }
    );
})



app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM useraccount WHERE email = ? AND password = ?",
        [email, password],
        (err, result) =>{
            if(err){
                res.send({error: err})
            }
            if(result.length > 0){
                res.send(result)
            }else{ 
                res.send({
                Message: "Wrong email or password",
                error: "true"
                })
            }
            
        }
    )

})

app.listen(8000 ,  () =>{ 
    console.log("Listerning 8000")
})