const Contact = require('../Models/contact.js')
module.exports={
    getContact:async(req, res) => {
        try{
      let cont=await Contact.findAll()
      res.send(cont)
    }
  
    catch(err) {
     console.log(err);
    }
    },
    addContact:async(req,res)=>{
        let addCont=await Contact.create(req.body)
        res.json(addCont)
      }
}
