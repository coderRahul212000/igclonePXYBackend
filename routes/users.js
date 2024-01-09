const mongoose = require("mongoose");
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb+srv://admin:igRudRSTjI78IqXA@cluster0.7jcbqzy.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Connected database"));

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage: String,
  bio: String,
  posts:[{type:mongoose.Schema.Types.ObjectId, ref:"post"}]
})

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema)