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
        res.json('err')
    }
},
deleteWish:(req,res)=>{
    
   Wish.destroy({
    where:{
        WishID:req.body.id
    }
   }).then((data)=>{
    res.json(data)
   }).catch(err=>{res.json(err.message)})
  
    
   
}
}