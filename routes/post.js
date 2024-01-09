const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:igRudRSTjI78IqXA@cluster0.7jcbqzy.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected database"));

const postSchema = mongoose.Schema({
  picture: String,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  date : {
    type:Date,
    default : Date.now()
  },
  likes:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
  ]
})

module.exports = mongoose.model("post", postSchema)