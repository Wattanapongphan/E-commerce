exports.listUsers = async(req,res)=>{
    try{
        //code
        res.send('Hello user')
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}