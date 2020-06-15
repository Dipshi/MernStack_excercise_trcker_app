const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const YogasanasSchema= new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    mainEffectiveArea:{type:String,required:true},
    otherBenefits:{type:String,required:true},
    // image:{data: Buffer, contentType: String}
    image:{type:String }

},{
    timestamps:true,
});

const Yoga = mongoose.model('Yoga',YogasanasSchema);
module.exports=Yoga;    

