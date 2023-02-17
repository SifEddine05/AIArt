const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()


/* *************************************  onpen AI config ******************/

const {Configuration , OpenAIApi } = require('openai')

const configuration =new Configuration({
   apiKey : process.env.OPENAI_API_KEY,

})


const opanai = new OpenAIApi(configuration)


/* *************************************  cloudinary config ******************/
const {v2} =require('cloudinary') 



v2.config(
    {
        cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
        api_key : process.env.CLOUDINARY_API_KEY , 
        api_secret:process.env.CLOUDINARY_API_SECRET
    }
)

router.post('/createphoto' ,async(req,res)=>{
    try {
        const {prompt} =req.body
        const aiResponse = await opanai.createImage({
            prompt,
            n: 1,
            size : "1024x1024",
            response_format : "b64_json"
        })
        const image = "data:image/jpeg;base64,"+aiResponse.data.data[0].b64_json;
        const url =  await v2.uploader.upload(image)
        res.status(200).json({photo : url.url })
    } catch (error) {
        console.log(error);
        res.status(400).json({err:error})
    }
})

module.exports=router