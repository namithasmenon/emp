const mongoose=require('mongoose');
const empschema = mongoose.Schema({
    EmpName: String,
    designation: String,
    empId: String,
    img_url: String,
  });
  const empdata=mongoose.model('empdetail',empschema);
  module.exports=empdata;