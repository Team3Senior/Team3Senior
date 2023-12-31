const Wish = require('../Models/wishlist')
module.exports={
    addwish:async(req,res)=>{
        
        let {NameWish,WishPrice,userUserID}=req.body
        try{
            let d=await Wish.create({NameWish,WishPrice,userUserID})    
        res.json(d)
        }
        catch(err){
            console.log(err.message)
        }
        
    },
    getuserwishes:async(req,res)=>{
        try{
        let d=await Wish.findAll({where:{userUserID:req.params.id}})
        res.json(d)
    }
    catch(err){
        res.status(400).json('err')
    }
},

}