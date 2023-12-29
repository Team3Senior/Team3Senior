const Wish = require('../Models/wishlist')
module.exports={
    addwish:async(req,res)=>{
        let d=await Wish.create(req.body)    
        res.json(d)
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