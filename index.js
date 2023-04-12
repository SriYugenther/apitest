const con = require('./connection');
const express = require('express');
const app = express();
app.use(express.json());
/*get - check the information
post - create a new information
put - modify the information
delete - delete the information*/
app.get('/',(req,res)=>{
   // res.send("Hi this is Sriyugenther");
    con.query("select * from user_account" , (err,result) =>{
        if(err){
            res.send("error");
        }else{
            res.send(result);
        }
    })
})

app.post('/',(req,res)=>{
    //const data = {email:"Narandhar"};//used to get data in this code
    const data =req.body;//used to get data in the postmon
    con.query("INSERT INTO user_account SET ?",data , (err,result) =>{
        if(err){
            res.send("error");
        }else{
            res.send(result);
        }
    })
})


app.put('/:user_id',(req,res)=>{
   // const data = ['Bhuvaneswar',1];//used to update data in this code
   const data = [req.body.email,req.params.user_id]
    con.query("UPDATE user_account SET email =? where user_id = ?",data,(err,result)=>{
        if(err){
            res.send("error");
        }else{
            res.send(result);
        }
    })
});

app.delete('/:user_id',(req,res)=>{
    const user_id = req.params.user_id;
    con.query("DELETE from user_account where user_id="+user_id,(err,result)=>{
        if(err){
           throw err;//res.send("error");
        }else{
            res.send(result);
        }
    })
})
app.listen(4200);