const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json({limit:"10mb"}))
const PORT=process.env.PORT || 8002


mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Mongodb connected")).catch((err)=>console.log(err))

const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type:String,
        unique:true
    },
    password: String,
    confirmpassword: String,
    image:String

})

const userModel=mongoose.model("user",userSchema)

app.get('/',(req,res)=>{
    res.send('Server is running')
})
app.post('/signup', async (req, res) => {
        console.log(req.body);
        const { email } = req.body;

        const result = await userModel.findOne({ email: email });
        console.log(result);

        if (result) {
            res.status(400).send({ message: "Email id is already registered" });
        } else {
            const data = new userModel(req.body);
            await data.save();
            res.status(201).send({ message: "Successfully Signed Up" });
        }
     
});

app.post("/login",async(req,res)=>{
    console.log(req.body);
        const { email } = req.body;

        const result = await userModel.findOne({ email: email });
        console.log(result);

        if (result) {
            
            const dataSend={
                _id:result._id,
                firstName:result.firstName,
                lastName:result.lastName,
                email:result.email,
                image:result.image
            };
            console.log(dataSend)
            res.send({ message: "Login Successfully" ,alert:true,data:dataSend});
        }else{
            res.send({ message: "You are not registered,Please signup" ,alert:false});
        }
})
//product section
const schemaProduct=mongoose.Schema({
    name:String,
    category:String,
    image:String,
    price:String,
    description:String
})
const productModel=mongoose.model("product",schemaProduct)

app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body)
    const data=await productModel(req.body)
    const datasave=await data.save()
    res.send({message: "Upload Successfully"})
})
app.get("/product",async(req,res)=>{
    const data=await productModel.find({})
    res.send(JSON.stringify(data))
})



app.listen(PORT,()=>console.log('Server is running at this port'+PORT))