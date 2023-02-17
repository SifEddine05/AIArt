
const express = require('express')
const router = express.Router()
const Posts = require('../models/Posts')
const dotenv = require('dotenv')
const {Configuration , OpenAIApi } = require('openai')
const {v2} =require('cloudinary') 


dotenv.config()


router.post('/addPost', async(req,res)=>{

    const newPost = new Posts(req.body)
    try {
        
        const s = await newPost.save()

        res.status(200).json({success : true , data : s})
    } catch (error) {

       // res.send(error)
        res.status(400).json({success : 0  , message : error})

    }
})




router.get('/getAllPosts',async (req,res)=>{
    try {
        const resultat = await Posts.find()
        res.status(200).json(resultat)
    } catch (error) {
        res.status(400).send("there is a probleme in getting data")
    }
   
})


module.exports=router