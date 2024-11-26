const dotenv=require("dotenv").config();
const express = require("express");
const connectDB=require("./config/connectDB");
const mongoose=require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes=require("./routes/taskRoute");
const cors=require("cors")


const app = express();

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors({
   origin:["http://localhost:3000", "http://task-manager.onrender.com"]
}))

app.use("/api/tasks",taskRoutes);

//const logger =(req,res,next)=>{
//    console.log("Middleware ran");
//    console.log(req.method);
//        next()
//};

//routes
app.get("/",(req,res)=>{
    res.send("Home page");
});


const PORT=process.env.PORT || 5000
mongoose
   .connect(process.env.MONGO_URI)
   .then(()=>{
      app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
      });
   })
   .catch((err)=>console.log(err));
   
//const startServer=async () => {
//    try {
//        await connectDB();
//        app.listen(PORT,()=>{
//            console.log(`Server running on port ${PORT}`);
//            
//        });
//    } catch (error) {
//        console.log(error);
//        
//    }
//}
//startServer();

// connection string- mongodb+srv://bsona2470:<db_password>@sonacluster.uuaej.mongodb.net/
//install frontend -  npx create-react-app frontend

//command to run this backend is - npm run backend