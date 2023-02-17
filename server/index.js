const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Posts = require('./models/Posts')
const PoststRoutes = require('./routes/PotstRoutes')
const DallERoutes = require('./routes/DallERoutes')

const app = express()
const dotenv = require('dotenv')

dotenv.config()



mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true , useUnifiedTopology: true})
.then((res)=>{app.listen(8000);
    console.log("connected to db");
})
.catch((err)=>{
    console.log("Error in connection with the dataBase : "+err);
})



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(PoststRoutes)
app.use(DallERoutes)
