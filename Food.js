
const mongoose=require('mongoose')

const schema=mongoose.Schema({
    id:String,
    name:String,
    category:String,
    price:String,
    description:String
});

module.exports=mongoose.model('Food',schema);