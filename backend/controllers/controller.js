import Event from '../model/Event.js'

export const getallEvent=async(err,res,req,next)=>{
    let Events;
    try{
         let Events=await Event.find();
    }
    catch(err){
        return console.log(err)
    }
    if(!Events){
        return res.status(404).json({message:"Event not found"});
    }
    else{
       return  res.status(200).json({Events});
    }
}
export const signIn=async(req,res,next)=>{
    const {name,email,password}=req.body;
    let exits;
    try{
        exits=await Event.findOne({email});
    }
    catch(err){
        return   console.log(err);
    }
    if(exits){
        return res.status(400).json({message:"Event exits"});
    }
    const Event=new Event({
        title,
        desp,
        photo,
        headName,
        headNumber,
        heademail,
        date,
        venue,
        form_link,
        Sheet_link,
        Department
    });
    try{
        await Event.save();
    }
    catch(err){
        console.log(err)
    }
    return res.status(201).json({Event});
}