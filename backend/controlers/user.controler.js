

export const test=(req,res)=>{
    console.log("router success!")
    res.json({
        message:"this is controller from controllers"
    })
}