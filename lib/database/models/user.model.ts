//clerkId email,username,photo,firstName,lastName,planId,creditBalance,

import { Document, model, models, Schema } from "mongoose";


export interface User extends Document{
  clerkId:String,
  email:string,
  userName:string,
  Photo:string,
  FirstName:string,
  lastName:string,
  planId:string,
  creditBalance:Number
}

const UserSchema=new Schema({
  clerkId:{type:String,require:true,unique:true},
  email:{type:String,require:true,unique:true},
  userName:{type:String,require:true,unique:true},
  Photo:{type:String,require:true},
  FirstName:{type:String},
  lastName:{type:String},
  planId:{type:Number,default:1},
  creditBalance:{type:Number,default:10}

})

const User=models?.User || model("User",UserSchema);


export default User