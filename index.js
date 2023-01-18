const express=require("express");
const app=express();
const router=express.Router();
app.use(express.json())

app.get("/health",(req,res)=>{
    res.json({"working":"if you see this message the site is up and running"})
})


app.listen(5000, () => {console.log("Server is running on port 3000")})
