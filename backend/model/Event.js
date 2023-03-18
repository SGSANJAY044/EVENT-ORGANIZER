import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const events = new Schema({
    title:{
        type:String,
        required:true
    },
    desp:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    headName:{
        type:String,
        required:true
    },
    headNumber:{
        type:Number,
        required:true,
        unique:true,
        minlength:10
    },
    heademail:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true,
    },
    venue:{
        type:String,
        required:true
    },
    form_link:{
        type:String,
    },
    Sheet_link:{
        type:String,
    },
    Department:{
        type:String,
    }
});

export default mongoose.model("Event", events);