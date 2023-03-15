const express=require("express")
const { default: mongoose } = require("mongoose")
const app=express()
require("dotenv").config()
const {empCreate,showEmp,empDelete,empUpdate}=require("./controller/empController")
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>")
})



app.post("/emp",empCreate)
app.get("/emp",showEmp)
app.delete("/emp",empDelete)
app.put("/emp",empUpdate)

const ConnectDataBase=()=>{
    try{
mongoose.set("strictQuery",true)
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
console.log("connected to Atlas Data base!!!");
    }
    catch(err){
        console.log("pramod_error",err);
    }
}
ConnectDataBase()

app.listen(5000,()=>{
    console.log("server connect to 5000");
})