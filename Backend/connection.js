const mongoose = require("mongoose");
mongoose
  .connect(
   'mongodb+srv://namithasmenonb22cs1236:0481nami@cluster0.hg5wqaj.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
