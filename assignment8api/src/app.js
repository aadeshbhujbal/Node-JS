const express= require('express');
const app= express();

const Router= require('./router');
 
app.use(express.json());
app.use("/",Router);

module.exports = app;