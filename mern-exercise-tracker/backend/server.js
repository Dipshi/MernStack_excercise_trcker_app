const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo DB connection established");
});

const exerciseRouter=require('./routes/exercises');
const userRoute =require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRoute);


app.listen(port,()=>{
    console.log(`Server is runnng on port: ${port}`);
});