const express=require('express')
const app=express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port=process.env.PORT || 6060
const cors = require('cors')
// Middleware
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('<h1>Boss Your express js</h1>')
})
const uri = `mongodb+srv://emajhon:${process.env.BD_pass}@cluster0.bbfxr09.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    const emabd = client.db("Ema-Jhon").collection("user");
    try{
        // how to get data
      app.get("/product",async(req,res)=>{
        const page=parseInt(req.query.page)
         const query={}
         const cursor=emabd.find(query)
         let result;
         /*0-->skip:0 get:0-10
         1-->skip:1*10 get:11-20
         2-->skip:2*10 get:21-30
         3-->skip:3*10 get:31-40*/
         if(page){
            result=await cursor.skip(page).limit(8).toArray()
         }else{
            result=await cursor.toArray()
         }
         res.send(result)
      })  
      app.get("/productcount",async(req,res)=>{
        const count=await emabd.countDocuments()
        res.send({count})
      })
    // rouring
    app.get("/product/:id",async(req,res)=>{
        const id=req.params.id
        const result=await emabd.findOne({_id:ObjectId(id)})
        res.send(result)
    })
    // post
    app.post("/product",async(req,res)=>{
        const bodydata=req.body
        const result=await emabd.insertOne(bodydata)
        res.send(result)
    })

    }finally{

    }
}
run().catch(console.dir)



app.listen(port,()=>{
    console.log('Your server run sucessfull')
})
