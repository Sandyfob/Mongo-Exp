const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    ProductName:{type:String},
    ProductDesc:{type:String},
    ProductPrice:{type:String},
    ManufactureDate:{type:Date,default:Date.now},
    ExpiryDate:{type:Date,default:Date.now}
})

module.exports=mongoose.model('/product',productschema)