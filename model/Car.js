const mongoose= require("mongoose")
const schema=mongoose.Schema(
    {
       id:Number,
       SuperCarName:String,
       SuperCarImage:String,
       SuperCarDescription:String,
       SuperCarPrice:Number

    }
)
module.exports=mongoose.model("Car",schema);

