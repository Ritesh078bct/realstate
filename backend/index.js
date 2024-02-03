import  express  from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import userRouter from "./router/user.router.js"
import authRouter from "./router/auth.router.js"

const app = express()
const port = 4000
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode||500
  const message=err.message||"internal server error!"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!!`)
})