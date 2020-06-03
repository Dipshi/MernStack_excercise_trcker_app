const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const YogasanasSchema= new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    mainEffectiveArea:{type:String,required:true},
    otherAreasEffected:{type:String,required:true},
    image:{data: Buffer, contentType: String }
},{
    timestamps:true,
});


const Yoga = mongoose.model('Exercise',YogasanasSchema);
module.exports=Yoga;    
