let empSchema=require("../Model/EmpSchema.js")


const empCreate=async(req,res)=>{

try{
    
 let newData=new empSchema({
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
 })

let data=await newData.save()
res.json({
    data_saved:data
})

}
catch(err)
{
    res.json({Error_is :err})
}
}


let showEmp=async(req,res)=>{

    try{
        let all=await empSchema.find({})
        res.json({detials:all})
    }
    catch(err)
    {
        res.json({pramod_err:err})
    }

}
let empDelete=async(req,res)=>{
try{
    let email=req.body.email

    let reply=    await empSchema.findOneAndDelete({email:req.body.email})
    res.json({msg:"delted Successfully"})
}
catch(err){

}
}

let empUpdate=async(req,res)=>{try{
    
   let data= await empSchema.findOneAndUpdate({email:req.body.email},{
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
     },  { new: true })
     res.json({updatedTo:data})
}
catch(err)
{
res.json({erroe:err})
}

}

module.exports={empCreate,showEmp,empDelete,empUpdate}