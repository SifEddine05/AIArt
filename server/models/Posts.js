
const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()
const PostSchema = mongoose.Schema ; 

const Post = new PostSchema ({
    name : { 
        type : String , 
        required : true , 
    },
    description  : { 
        type : String , 
        required : true , 
    },
    image : {
        type : String ,
        require : true , 
    },
   

} ,{ titmestamps: true   })

const Posts  = mongoose.model('Posts',Post)
module.exports = Posts
