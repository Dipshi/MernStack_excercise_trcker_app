const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv').config();

const app=express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser:true,useCreateIndex:true}).
    then(() => {
        console.log('Database sucessfully connected')
        },
        error => {
        console.log('Database could not be connected: ' + error)
        }
        )
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo DB connection established");
});

const exerciseRouter=require('./routes/exercises');
const userRoute =require('./routes/users');
const yogaRoute=require('./routes/yogasanas')

app.use('/exercises',exerciseRouter);
app.use('/users',userRoute);
app.use('/yogas',yogaRoute)


app.listen(port,()=>{
    console.log(`Server is runnng on port: ${port}`);
});