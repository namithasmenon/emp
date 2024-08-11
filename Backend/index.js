const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here
const empModel=require('./model/empdata');

app.post("/add", async (req, res) => {
  try {
    var item=req.body;
const datasave=new empModel(item);
const saveddata=await datasave.save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get('/get',async (req,res)=>{
  try{
  const data=await empModel.find()
  res.send(data)
  }
  catch(error){
      console.log('data not found')
  }
})
//delete user
app.delete('/remove/:id',async (req,res)=>{
  try{
      await empModel.findByIdAndDelete(req.params.id);
      res.send('deleted succesfully')
  }
  catch(error){
      console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
