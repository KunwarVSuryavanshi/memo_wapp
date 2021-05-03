import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(bodyParser.json({limit:"30mb", extended :true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended :true}));
app.use(cors());  

const url = "mongodb+srv://kvs:kvs123@cluster0.dhbgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;
//SCHEMA
const schema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMEssage',schema);


//LINK ACCESS
app.get('/',async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);
        res.status(200).json(postMessages)
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
})

app.post('/',async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post)
    try{
        await newPost.save()
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message: error.message})
    }
})


//LAST PORT
mongoose.connect(url)
.then(()=> app.listen(PORT, ()=> console.log("************Connected to daatabase**********")))
.catch((err)=> console.log(err))

