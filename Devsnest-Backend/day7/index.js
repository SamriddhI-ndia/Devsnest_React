const express=require('express');
const app=express();
app.get("/", (req, res) => {
    res.status(200).send("Hello");
  });
  
  app.get("/home", (req, res) => {
    res.send(req.query); 
  });
  
  app.post("/", (req, res) => {
    res.send("Hello POST");
  });
  
  app.put("/", (req, res) => {
    res.send("Hello1 PUT");
  });
  
  app.get("/a(b)?cd", (req, res) => {
    res.send("a(b is optional)cd");
  });
  
  app.get("/ab(c)+de", (req, res) => {
    res.send("ab(no limit on c)de");
  });
  
  app.get("/xy*ab", (req, res) => {
    res.send("xy(anything in between)ab");
  });
  
  app.get("/xy*ab", (req, res) => {
    res.send("xy(anything in between)ab");
  });
  
  app.get(/k/, (req, res) => {
    res.send("use of regex starting with k");
  });
  
  app.get("/user/:userid/student/:studentid", (req, res) => {
    res.send(req.params); 
  });
  
app.listen(5000);